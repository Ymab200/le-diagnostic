import { Link } from 'react-router-dom';
import {
  Heart,
  Activity,
  Baby,
  Microscope,
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    patients: 0,
    doctors: 0,
    exams: 0,
  });

  useEffect(() => {
    const targets = { patients: 4000, doctors: 50, exams: 15000 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedNumbers({
        patients: Math.floor(targets.patients * progress),
        doctors: Math.floor(targets.doctors * progress),
        exams: Math.floor(targets.exams * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Bilan de Fertilité',
      description: 'Analyses complètes pour identifier les obstacles à votre projet parental',
      link: '/fertilite',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Booster Spermatozoïdes',
      description: 'Programmes personnalisés pour améliorer la qualité spermatique',
      link: '/booster-spermatozoides',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Suivi de Grossesse',
      description: 'Accompagnement complet tout au long de votre grossesse',
      link: '/bilan-grossesse',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Analyses Médicales',
      description: 'Large gamme d\'analyses biologiques de haute précision',
      link: '/examens',
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Équipements de pointe',
      description: 'Technologie médicale dernière génération',
    },
    {
      icon: <Users className="w-12 h-12 text-pink-600" />,
      title: 'Équipe expérimentée',
      description: 'Professionnels qualifiés et dévoués',
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Résultats rapides',
      description: 'Délais de traitement optimisés',
    },
    {
      icon: <Award className="w-12 h-12 text-pink-600" />,
      title: 'Qualité certifiée',
      description: 'Normes internationales respectées',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/90 to-black/90"></div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/enceinte.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
              La Maison Du Diagnostic Medicale De Bafoussam
            </h1>
            <h2 className="text-3xl md:text-2xl font-semibold text-white/90 mb-4">
              Centre de Diagnostic Médical
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Analyses médicales • Échographies • Fertilité • Suivi de grossesse
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Prendre Rendez-vous</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/examens"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2">
                +{animatedNumbers.patients.toLocaleString()}
              </div>
              <div className="text-white/80 text-lg">Patients satisfaits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2">
                +{animatedNumbers.doctors}
              </div>
              <div className="text-white/80 text-lg">Médecins experts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2">
                +{animatedNumbers.exams.toLocaleString()}
              </div>
              <div className="text-white/80 text-lg">Examens réalisés</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Votre santé mérite ce qu'il y a de meilleur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nos services principaux
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des solutions médicales adaptées à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4269492/pexels-photo-4269492.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Prenez rendez-vous dès aujourd'hui et bénéficiez de nos services de qualité
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Prendre Rendez-vous</span>
                <CheckCircle className="w-5 h-5" />
              </Link>
              <a
                href="tel:+237692574823"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                +237 698 03 22 81
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
