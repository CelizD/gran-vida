import { useState, useRef } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const especialidades = [
  'Perro de Intervención / Terapia Asistida',
  'Perro de Apoyo Emocional',
  'Perro de Servicio Autorizado',
];

const especialidadValue: Record<string, string> = {
  'Perro de Intervención / Terapia Asistida': 'Terapia',
  'Perro de Apoyo Emocional': 'Apoyo Emocional',
  'Perro de Servicio Autorizado': 'Servicio',
};

const initialState = {
  nombrePerro: '', raza: '', fechaNacimiento: '',
  certificacion: '', especialidad: 'Terapia',
  nombreDueno: '', telefono: '', correo: '',
  direccion: '', curp: '',
};

export default function FormularioRegistro() {
  const [formData, setFormData] = useState(initialState);
  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState<{ texto: string; tipo: 'exito' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setMensaje({ texto: 'La imagen no debe superar 5 MB.', tipo: 'error' });
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setMensaje({ texto: 'Solo se aceptan imágenes JPG, PNG o WebP.', tipo: 'error' });
      return;
    }

    setFoto(file);
    setPreview(URL.createObjectURL(file));
    setMensaje(null);
  };

  const set = (key: keyof typeof initialState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFormData(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!foto) {
      setMensaje({ texto: 'Por favor, selecciona una fotografía del ejemplar.', tipo: 'error' });
      return;
    }
    setCargando(true);
    setMensaje(null);

    try {
      const fotoRef = ref(storage, `fotos_perros/${Date.now()}_${foto.name}`);
      await uploadBytes(fotoRef, foto);
      const fotoUrl = await getDownloadURL(fotoRef);

      await addDoc(collection(db, 'perros_terapia'), {
        estado: 'pendiente',
        perro: { ...formData, fotoUrl },
        fechaRegistro: new Date().toISOString(),
      });

      setMensaje({
        texto: '¡Expediente enviado con éxito! El perfil se activará una vez que la administración lo revise y apruebe.',
        tipo: 'exito',
      });

      // Reset completo — estado Y campos visuales
      setFormData(initialState);
      setFoto(null);
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error(error);
      setMensaje({ texto: 'Ocurrió un error al enviar los datos. Intenta de nuevo.', tipo: 'error' });
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-verde-fondo py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="inline-block text-[0.7rem] tracking-[0.22em] uppercase text-terracota font-medium px-4 py-1.5 border border-terracota/30 rounded-full mb-5">
            Sistema de Verificación Digital
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-verde-oscuro leading-tight mb-4">
            Registro Oficial de<br />
            <em className="text-verde not-italic">Perros de Terapia</em>
          </h1>
          <p className="text-[#6B7A60] text-base leading-relaxed max-w-lg mx-auto">
            Introduce los datos del binomio para iniciar el proceso de validación y generación del perfil digital verificable.
          </p>
        </div>

        {/* Alerta */}
        {mensaje && (
          <div className={`mb-8 px-5 py-4 rounded-2xl text-sm leading-relaxed border ${
            mensaje.tipo === 'exito'
              ? 'bg-verde/5 border-verde/20 text-verde-oscuro'
              : 'bg-terracota/5 border-terracota/20 text-terracota'
          }`}>
            {mensaje.tipo === 'exito' ? '✓ ' : '⚠ '}{mensaje.texto}
          </div>
        )}

        {/* Tarjeta principal */}
        <div className="bg-white rounded-3xl border border-[#E5DDD0] shadow-[0_4px_40px_rgba(30,42,26,0.07)]">

          <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-12">

            {/* ── SECCIÓN 1: ANIMAL ── */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#EDE8DF]">
                <span className="text-xl">🐾</span>
                <h2 className="font-serif text-xl text-verde-oscuro">Información del Ejemplar</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <Field label="Nombre del Perro" required>
                  <input
                    type="text" required
                    value={formData.nombrePerro}
                    onChange={set('nombrePerro')}
                    className={inputCls}
                    placeholder="Ej. Luna"
                  />
                </Field>

                <Field label="Raza" required>
                  <input
                    type="text" required
                    value={formData.raza}
                    onChange={set('raza')}
                    className={inputCls}
                    placeholder="Ej. Golden Retriever"
                  />
                </Field>

                <Field label="Fecha de Nacimiento" required>
                  <input
                    type="date" required
                    value={formData.fechaNacimiento}
                    onChange={set('fechaNacimiento')}
                    className={inputCls}
                  />
                </Field>

                <Field label="Nº de Certificación Oficial">
                  <input
                    type="text"
                    value={formData.certificacion}
                    onChange={set('certificacion')}
                    className={inputCls}
                    placeholder="Opcional"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Especialidad de Trabajo" required>
                    <select
                      required
                      value={especialidades.find(e => especialidadValue[e] === formData.especialidad) ?? especialidades[0]}
                      onChange={(e) => setFormData(prev => ({ ...prev, especialidad: especialidadValue[e.target.value] }))}
                      className={inputCls}
                    >
                      {especialidades.map(esp => (
                        <option key={esp} value={esp}>{esp}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Upload de foto */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>Fotografía de Identificación <span className="text-terracota">*</span></label>

                  {preview ? (
                    <div className="relative mt-1.5 rounded-2xl overflow-hidden border border-[#E5DDD0]">
                      <img src={preview} alt="Preview" className="w-full h-52 object-cover" />
                      <button
                        type="button"
                        onClick={() => { setFoto(null); setPreview(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="absolute top-3 right-3 bg-verde-oscuro/70 hover:bg-verde-oscuro text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors"
                      >
                        Cambiar foto
                      </button>
                    </div>
                  ) : (
                    <label className="mt-1.5 flex flex-col items-center justify-center gap-2 h-36 border-2 border-dashed border-[#C2D6BF] rounded-2xl bg-verde/[0.03] hover:bg-verde/[0.06] cursor-pointer transition-colors">
                      <span className="text-2xl">📸</span>
                      <span className="text-sm text-[#6B7A60]">Haz clic para subir o arrastra la foto aquí</span>
                      <span className="text-[0.7rem] text-[#9CAB8F]">JPG, PNG o WebP — máx. 5 MB</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        required
                        onChange={handleFoto}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

              </div>
            </section>

            {/* ── SECCIÓN 2: DUEÑO ── */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#EDE8DF]">
                <span className="text-xl">👤</span>
                <h2 className="font-serif text-xl text-verde-oscuro">Información del Manejador / Propietario</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="sm:col-span-2">
                  <Field label="Nombre Completo del Titular" required>
                    <input
                      type="text" required
                      value={formData.nombreDueno}
                      onChange={set('nombreDueno')}
                      className={inputCls}
                      placeholder="Nombre y apellidos"
                    />
                  </Field>
                </div>

                <Field label="Teléfono de Contacto" required>
                  <input
                    type="tel" required
                    value={formData.telefono}
                    onChange={set('telefono')}
                    className={inputCls}
                    placeholder="664 000 0000"
                  />
                </Field>

                <Field label="Correo Electrónico" required>
                  <input
                    type="email" required
                    value={formData.correo}
                    onChange={set('correo')}
                    className={inputCls}
                    placeholder="correo@ejemplo.com"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Dirección Residencial" required>
                    <input
                      type="text" required
                      value={formData.direccion}
                      onChange={set('direccion')}
                      className={inputCls}
                      placeholder="Calle, número, colonia, ciudad"
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field label="CURP o Identificación Oficial" required>
                    <input
                      type="text" required
                      value={formData.curp}
                      onChange={set('curp')}
                      className={inputCls}
                      placeholder="18 caracteres CURP o número de ID"
                    />
                  </Field>
                </div>

              </div>
            </section>

            {/* Botón */}
            <button
              type="submit"
              disabled={cargando}
              className="w-full py-4 rounded-2xl font-medium text-white text-sm tracking-widest uppercase transition-all"
              style={{
                background: cargando
                  ? '#9CAB8F'
                  : 'linear-gradient(135deg, #4E6E49 0%, #3a5436 100%)',
                cursor: cargando ? 'not-allowed' : 'pointer',
                boxShadow: cargando ? 'none' : '0 8px 32px rgba(78,110,73,0.3)',
              }}
            >
              {cargando ? 'Procesando expediente...' : 'Enviar Expediente a Revisión'}
            </button>

          </form>
        </div>

        {/* Nota legal */}
        <p className="text-center text-[0.72rem] text-[#9CAB8F] mt-8 leading-relaxed">
          Gran Vida Servicios A.C. · RFC: GVS250609FY2<br />
          Los datos proporcionados se usarán exclusivamente para el proceso de certificación digital.
        </p>

      </div>
    </div>
  );
}

// ── Helpers de estilos ──

const labelCls = 'block text-[0.7rem] font-semibold text-[#8A9A80] uppercase tracking-[0.12em] mb-1.5';

const inputCls = [
  'w-full px-4 py-3 rounded-xl text-sm text-[#2C3525] bg-[#FAFAF7]',
  'border border-[#DDD7CC] placeholder:text-[#B8C4B2]',
  'focus:outline-none focus:border-[#4E6E49] focus:ring-2 focus:ring-[#4E6E49]/10',
  'transition-all duration-200',
].join(' ');

function Field({ label, required, children }: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}{required && <span className="text-terracota ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}