import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Fertilite from './pages/Fertilite';
import BoosterSpermatozoides from './pages/BoosterSpermatozoides';
import ExamenGlaire from './pages/ExamenGlaire';
import BilanGrossesse from './pages/BilanGrossesse';
import Promotions from './pages/Promotions';
import BilanPrenatal from './pages/BilanPrenatal';
import Examens from './pages/Examens';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <ThemeToggle />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fertilite" element={<Fertilite />} />
          <Route path="/booster-spermatozoides" element={<BoosterSpermatozoides />} />
          <Route path="/examen-glaire" element={<ExamenGlaire />} />
          <Route path="/bilan-grossesse" element={<BilanGrossesse />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/bilan-prenatal" element={<BilanPrenatal />} />
          <Route path="/examens" element={<Examens />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
