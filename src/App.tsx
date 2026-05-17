import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import ScienceBand from './sections/ScienceBand';
import Services from './sections/Services';
import Process from './sections/Process';
import Stats from './sections/Stats';
import CTA from './sections/CTA';
import FormularioRegistro from './pages/FormularioRegistro';
import PanelAdmin from './pages/PanelAdmin';
import PerfilPerro from './pages/PerfilPerro';
import Nosotros from './pages/Nosotros';
import GuiaDuenos from './pages/GuiaDuenos';
import AnalisisIAA from './pages/AnalisisIAA';
import TenenciaPerros from './pages/TenenciaPerros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '5rem' }}>
          <Routes>
            <Route path="/" element={<><Hero /><ScienceBand /><Services /><Process /><Stats /><CTA /></>} />
            <Route path="/nosotros"          element={<Nosotros />} />
            <Route path="/guia-duenos"       element={<GuiaDuenos />} />
            <Route path="/analisis-iaa"      element={<AnalisisIAA />} />
            <Route path="/tenencia-perros"   element={<TenenciaPerros />} />
            <Route path="/contacto"          element={<Contacto />} />
            <Route path="/registro-terapia"  element={<FormularioRegistro />} />
            <Route path="/admin-control"     element={<PanelAdmin />} />
            <Route path="/busca-perro/:id"   element={<PerfilPerro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}