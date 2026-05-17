import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import QRCode from 'react-qr-code';

interface PerroDatos {
  estado: string;
  perro: {
    nombrePerro: string;
    raza: string;
    especialidad: string;
    fotoUrl: string;
    certificacion: string;
    fechaNacimiento: string;
    nombreDueno: string;
  };
}

export default function PerfilPerro() {
  const { id } = useParams<{ id: string }>();
  const [perro, setPerro] = useState<PerroDatos | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerPerro = async () => {
      if (!id) return;
      try {
        const perroSnap = await getDoc(doc(db, "perros_terapia", id));
        if (perroSnap.exists()) {
          const datos = perroSnap.data() as any;
          
          // Formateamos de forma segura la bajada de datos
          const estructurado: PerroDatos = {
            estado: datos.estado || 'pendiente',
            perro: {
              nombrePerro: datos.perro?.nombrePerro || datos.perro?.nombre || 'Binomio Certificado',
              raza: datos.perro?.raza || 'No especificada',
              especialidad: datos.perro?.especialidad || 'Terapia Asistida',
              fotoUrl: datos.perro?.fotoUrl || '',
              certificacion: datos.perro?.certificacion || 'Verificación Activa',
              fechaNacimiento: datos.perro?.fechaNacimiento || 'N/A',
              nombreDueno: datos.dueno?.nombre || datos.perro?.nombreDueno || 'Manejador Oficial'
            }
          };

          if (estructurado.estado !== 'aprobado') {
            setError('Este expediente digital se encuentra en proceso de validación administrativa.');
          } else {
            setPerro(estructurado);
          }
        } else {
          setError('El identificador escaneado no corresponde a ningún ejemplar de nuestro registro oficial.');
        }
      } catch (err) {
        console.error(err);
        setError('Error de comunicación con el nodo central de verificación.');
      } finally {
        setCargando(false);
      }
    };

    obtenerPerro();
  }, [id]);

  // URL dinámica del QR que apunta directamente a este mismo perfil público de tu dominio
  const urlDeVerificacion = `https://granvidaservicios.org/busca-perro/${id}`;

  if (cargando) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-gray-50/50">
        <div className="animate-pulse text-lg font-medium text-gray-500">Consultando Registro Nacional Digital...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-red-50 text-red-800 rounded-2xl text-center shadow-md border border-red-100">
        <p className="text-3xl mb-3">⚠️</p>
        <h4 className="font-bold text-xl mb-2">Validación Denegada</h4>
        <p className="text-sm text-red-600 leading-relaxed">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50/40 via-white to-white py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100/80 overflow-hidden">
        
        {/* Banner Superior Estilo Identificación */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 text-center">
          <p className="text-white font-bold uppercase tracking-widest text-xs">
            Sistema de Verificación Digital — Gran Vida
          </p>
        </div>

        <div className="p-6 sm:p-10 text-center flex flex-col items-center">
          
          {/* Badge de Estatus */}
          <div className="bg-green-50 text-green-700 font-bold py-1.5 px-4 rounded-full text-xs uppercase tracking-wider mb-8 border border-green-200 shadow-sm inline-block">
            ✓ Ejemplar Activo y Certificado
          </div>

          {/* Avatar Circular con Borde Doble */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue-500/20 mb-6">
            <img 
              src={perro?.perro.fotoUrl} 
              alt={perro?.perro.nombrePerro} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Títulos Principales */}
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-1">
            {perro?.perro.nombrePerro}
          </h1>
          <p className="text-base font-semibold text-blue-600 uppercase tracking-widest mb-8">
            {perro?.perro.especialidad}
          </p>

          {/* Ficha de Información de Datos en Cuadrícula */}
          <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-4 mb-8 shadow-inner">
            <div className="grid grid-cols-2 gap-4 border-b border-gray-200/50 pb-3">
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Raza del Canino</span>
                <span className="text-sm font-bold text-gray-800">{perro?.perro.raza}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Folio Certificación</span>
                <span className="text-sm font-mono font-bold text-gray-800">{perro?.perro.certificacion}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Manejador Oficial</span>
                <span className="text-sm font-bold text-gray-800">{perro?.perro.nombreDueno}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fecha Nacimiento</span>
                <span className="text-sm font-bold text-gray-800">{perro?.perro.fechaNacimiento}</span>
              </div>
            </div>
          </div>

          {/* Bloque del Código QR de Validación Cruzada */}
          <div className="w-full border-t border-gray-100 pt-8 flex flex-col items-center">
            <h5 className="text-sm font-bold text-gray-700 mb-1">Código QR de Autenticidad</h5>
            <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
              Al escanear esta tarjeta impresa, el lector debe ser redirigido a esta página web oficial bajo el nodo seguro de granvidaservicios.org para confirmar la vigencia del binomio.
            </p>
            
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-lg transform hover:scale-102 transition-transform">
              <QRCode value={urlDeVerificacion} size={150} level="H" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}