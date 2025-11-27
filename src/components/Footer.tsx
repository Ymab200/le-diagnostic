import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              Le Diagnostic
            </h3>
            <p className="text-gray-300 mb-4">
              Centre de Diagnostic Médical de référence pour vos analyses, échographies et suivi de grossesse.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/profile.php?id=61583505822873"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-xxl rounded-xl flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">+237 698 03 22 81</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">centredediagnosticmedical@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">Bafoussam, Cameroun</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">Lundi - Vendredi</p>
                  <p className="text-gray-400 text-sm">7h00 - 19h00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">Samedi</p>
                  <p className="text-gray-400 text-sm">8h00 - 16h00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">Dimanche</p>
                  <p className="text-gray-400 text-sm">Fermé</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              <Link
                to="/fertilite"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Bilan de Fertilité
              </Link>
              <Link
                to="/bilan-grossesse"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Bilan de Grossesse
              </Link>
              <Link
                to="/promotions"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Promotions
              </Link>
              <Link
                to="/examens"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Tous les Examens
              </Link>
            </div>
          </div>         
        </div>
        

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 La Floraison - Centre de Diagnostic Médical. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/mentions-legales"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              to="/confidentialite"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
        {/* Développeur */}
<div className="mt-4 text-center text-white-600 text-sm">
  Développé par <span className="font-semibold">Arol Meula</span>
</div>
      </div>
    </footer>
  );
}
