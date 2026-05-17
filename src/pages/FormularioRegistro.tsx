import { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function FormularioRegistro() {
  const [formData, setFormData] = useState({
    nombrePerro: '', raza: '', fechaNacimiento: '',
    certificacion: '', especialidad: 'Terapia',
    nombreDueno: '', telefono: '', correo: '', direccion: '', curp: ''
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!foto) {
      setMensaje({ texto: 'Por favor, selecciona una foto para el perro.', tipo: 'error' });
      return;
    }
    setCargando(true);
    setMensaje({ texto: '', tipo: '' });

    try {
      const fotoRef = ref(storage, `fotos_perros/${Date.now()}_${foto.name}`);
      await uploadBytes(fotoRef, foto);
      const fotoUrl = await getDownloadURL(fotoRef);

      await addDoc(collection(db, "perros_terapia"), {
        estado: "pendiente",
        perro: { ...formData, fotoUrl },
        fechaRegistro: new Date().toISOString()
      });

      setMensaje({ texto: '¡Registro guardado con éxito! El perfil se activará cuando la administración lo revise y apruebe.', tipo: 'exito' });
      (e.target as HTMLFormElement).reset();
      setFoto(null);
    } catch (error) {
      console.error(error);
      setMensaje({ texto: 'Ocurrió un error al enviar los datos. Inténtalo de nuevo.', tipo: 'error' });
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Cabecera del formulario */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Registro Oficial de Perros de Terapia
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Por favor, introduce los datos correspondientes del binomio para iniciar el proceso de validación en el sistema de verificación digital.
          </p>
        </div>

        {/* Alertas de mensaje */}
        {mensaje.texto && (
          <div className={`p-4 rounded-xl mb-6 shadow-sm border ${
            mensaje.tipo === 'exito' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            {mensaje.texto}
          </div>
        )}

        {/* Tarjeta del Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 space-y-8">
          
          {/* SECCIÓN 1: DATOS DEL ANIMAL */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-blue-700 uppercase tracking-wider border-b border-gray-100 pb-2">
              🐾 Información del Ejemplar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nombre del Perro *</label>
                <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, nombrePerro: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Raza *</label>
                <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, raza: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Fecha de Nacimiento *</label>
                <input type="date" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, fechaNacimiento: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nº de Certificación Oficial</label>
                <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, certificacion: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Especialidad de Trabajo *</label>
                <select required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, especialidad: e.target.value})}>
                  <option value="Terapia">Perro de Intervención / Terapia Asistida</option>
                  <option value="Apoyo Emocional">Perro de Apoyo Emocional</option>
                  <option value="Servicio">Perro de Servicio Autorizado</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Fotografía de Identificación *</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl bg-gray-50/30 hover:bg-gray-50 transition-all relative">
                  <input type="file" accept="image/*" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => setFoto(e.target.files ? e.target.files[0] : null)} />
                  <div className="space-y-1 text-center">
                    <p className="text-sm text-gray-600">
                      {foto ? `📸 Archivo seleccionado: ${foto.name}` : "Haga clic para subir o arrastre la foto aquí"}
                    </p>
                    <p className="text-xs text-gray-400">Formatos recomendados: JPG, PNG de alta calidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: DATOS DEL DUEÑO */}
          <div className="space-y-5 pt-4">
            <h3 className="text-lg font-bold text-blue-700 uppercase tracking-wider border-b border-gray-100 pb-2">
              👤 Información del Manejador / Propietario
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nombre Completo del Titular *</label>
                <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, nombreDueno: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Teléfono de Contacto *</label>
                <input type="tel" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Correo Electrónico *</label>
                <input type="email" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, correo: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Dirección Residencial *</label>
                <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, direccion: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">CURP o Identificación Oficial *</label>
                <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({...formData, curp: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Botón de acción */}
          <div className="pt-4">
            <button type="submit" disabled={cargando}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white text-base shadow-lg transition-all transform hover:-translate-y-0.5 ${
                cargando ? 'bg-blue-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
              }`}>
              {cargando ? 'Procesando y Subiendo Expediente...' : 'Enviar Expediente a Revisión'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}