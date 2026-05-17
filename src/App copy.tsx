import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 1. Importamos tus componentes y secciones originales de la Landing Page
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ScienceBand from './sections/ScienceBand';
import Services from './sections/Services';
import Process from './sections/Process';
import Stats from './sections/Stats';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// 2. Importamos las 3 nuevas páginas del sistema de perros que creamos
import FormularioRegistro from './pages/FormularioRegistro';
import PanelAdmin from './pages/PanelAdmin';
import PerfilPerro from './pages/PerfilPerro';

export default function App() {
  return (
    <Router>
      {/* Contenedor principal con fondo limpio para que todo luzca uniforme */}
      <div className="min-h-screen bg-[#fafbfc] text-[#2d3748] flex flex-col justify-between">
        
        {/* El Navbar se queda fijo arriba en todo el sitio */}
        <Navbar />

        {/* Aquí adentro cambian las páginas dinámicamente según la URL */}
        <main className="flex-grow pt-24"> 
          {/* El pt-24 (padding top) es para que el Navbar fijo no tape el contenido de tus formularios */}
          <Routes>
            
            {/* RUTA 1: Tu página de inicio original completa */}
            <Route path="/" element={
              <>
                <Hero />
                <ScienceBand />
                <Services />
                <Process />
                <Stats />
                <CTA />
              </>
            } />

            {/* RUTA 2: El formulario estilizado para los dueños */}
            <Route path="/registro-terapia" element={<FormularioRegistro />} />

            {/* RUTA 3: Tu panel administrativo privado para aprobar */}
            <Route path="/admin-control" element={<PanelAdmin />} />

            {/* RUTA 4: El perfil público del perro que se abre con el QR */}
            <Route path="/busca-perro/:id" element={<PerfilPerro />} />

          </Routes>
        </main>

        {/* El Footer se queda fijo siempre abajo */}
        <Footer />
        
      </div>
    </Router>
  );
}