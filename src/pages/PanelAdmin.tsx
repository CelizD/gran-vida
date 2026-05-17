import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

interface PerroRegistro {
  id: string;
  estado: string;
  perro: {
    nombrePerro: string;
    raza: string;
    especialidad: string;
    fotoUrl: string;
    nombreDueno: string;
    telefono: string;
  };
}

export default function PanelAdmin() {
  const [registros, setRegistros] = useState<PerroRegistro[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargarRegistros = async () => {
    setCargando(true);
    try {
      const querySnapshot = await getDocs(collection(db, "perros_terapia"));
      const datos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as any[];
      
      // Mapeamos de forma segura por si las estructuras anidadas varían
      const formateados: PerroRegistro[] = datos.map(d => ({
        id: d.id,
        estado: d.estado || 'pendiente',
        perro: {
          nombrePerro: d.perro?.nombrePerro || d.perro?.nombre || 'Sin nombre',
          raza: d.perro?.raza || 'No especificada',
          especialidad: d.perro?.especialidad || 'Terapia',
          fotoUrl: d.perro?.fotoUrl || '',
          nombreDueno: d.dueno?.nombre || d.perro?.nombreDueno || 'Manejador no registrado',
          telefono: d.dueno?.telefono || d.perro?.telefono || 'Sin teléfono'
        }
      }));

      setRegistros(formateados);
    } catch (error) {
      console.error("Error al cargar:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarRegistros();
  }, []);

  const cambiarEstado = async (id: string, nuevoEstado: string) => {
    if (!window.confirm(`¿Confirmas cambiar el estatus de este registro a [${nuevoEstado.toUpperCase()}]?`)) return;
    try {
      await updateDoc(doc(db, "perros_terapia", id), { estado: nuevoEstado });
      cargarRegistros();
    } catch (error) {
      console.error(error);
      alert("Error al actualizar estatus.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/40 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Módulo de Control y Validación</h2>
          <p className="text-sm text-gray-500 mt-1">Revisa, aprueba o revoca las solicitudes de registro para la generación automática de perfiles y códigos QR públicos.</p>
        </div>
        <button onClick={cargarRegistros} className="inline-flex items-center bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
          🔄 Actualizar Monitor
        </button>
      </div>

      {cargando ? (
        <div className="text-center py-20 text-gray-400 font-medium">Sincronizando con base de datos en la nube...</div>
      ) : registros.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed p-8 text-gray-400">No se encontraron expedientes en el registro.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registros.map((reg) => (
            <div key={reg.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between">
              
              {/* Imagen y Badge */}
              <div className="h-52 w-full relative bg-gray-100">
                {reg.perro.fotoUrl ? (
                  <img src={reg.perro.fotoUrl} alt={reg.perro.nombrePerro} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-xs">Sin imagen adjunta</div>
                )}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                  reg.estado === 'aprobado' ? 'bg-green-500' : reg.estado === 'rechazado' ? 'bg-red-500' : 'bg-amber-500'
                }`}>
                  {reg.estado}
                </span>
              </div>

              {/* Contenido Técnico */}
              <div className="p-6 flex-grow space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{reg.perro.nombrePerro}</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">{reg.perro.especialidad}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm border-t border-b border-gray-50 py-3 my-2">
                  <p className="text-gray-500">Raza: <span className="font-semibold text-gray-800 block sm:inline">{reg.perro.raza}</span></p>
                  <p className="text-gray-500">ID Ref: <span className="font-mono text-xs text-gray-400 block">{reg.id.substring(0, 8)}...</span></p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 text-xs space-y-1">
                  <p className="text-gray-600"><strong>Manejador:</strong> {reg.perro.nombreDueno}</p>
                  <p className="text-gray-600"><strong>Teléfono:</strong> {reg.perro.telefono}</p>
                </div>
              </div>

              {/* Botones de Control */}
              <div className="px-6 pb-6 pt-2 space-y-2">
                <div className="flex gap-2">
                  {reg.estado !== 'aprobado' && (
                    <button onClick={() => cambiarEstado(reg.id, 'aprobado')} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm">
                      Aprobar y Activar QR
                    </button>
                  )}
                  {reg.estado !== 'rechazado' && (
                    <button onClick={() => cambiarEstado(reg.id, 'rechazado')} className="flex-1 bg-white hover:bg-red-50 border border-red-200 text-red-600 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                      Rechazar
                    </button>
                  )}
                </div>

                {reg.estado === 'aprobado' && (
                  <Link to={`/busca-perro/${reg.id}`} target="_blank" className="block w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2 rounded-xl text-xs transition-colors border border-blue-100">
                    Ver Perfil Público y QR Oficial ↗
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}