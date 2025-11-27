import { useState } from 'react';
import { Search, X, Clock, FileText, AlertCircle, Microscope, Activity, Heart, Droplet, Baby, Stethoscope } from 'lucide-react';

interface Exam {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  preparation: string;
  indications: string[];
  category: string;
  icon: string;
}

export default function Examens() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  const exams: Exam[] = [
    {
      id: '1',
      name: 'Spermogramme',
      description: 'Analyse complète du sperme pour évaluer la fertilité masculine',
      price: 35000,
      originalPrice: 40000,
      duration: '30 minutes',
      preparation: 'Abstinence sexuelle de 3 à 5 jours',
      indications: ['Infertilité du couple', 'Bilan de fertilité', 'Contrôle post-vasectomie'],
      category: 'Fertilité',
      icon: 'microscope',
    },
    {
      id: '2',
      name: 'Échographie Pelvienne',
      description: 'Examen des organes pelviens féminins',
      price: 7000,
      originalPrice: 12000,
      duration: '20 minutes',
      preparation: 'Vessie pleine ou vide selon le type',
      indications: ['Douleurs pelviennes', 'Suivi gynécologique', 'Infertilité'],
      category: 'Imagerie',
      icon: 'activity',
    },
    {
      id: '3',
      name: 'Dosage FSH',
      description: 'Mesure de l\'hormone folliculostimulante',
      price: 8000,
      originalPrice: 12000,
      duration: '10 minutes',
      preparation: 'À jeun, 3ème jour du cycle',
      indications: ['Bilan de fertilité', 'Troubles du cycle', 'Ménopause'],
      category: 'Hormones',
      icon: 'droplet',
    },
    {
      id: '4',
      name: 'Échographie Obstétricale',
      description: 'Surveillance du développement fœtal',
      price: 7000,
      originalPrice: 10000,
      duration: '30 minutes',
      preparation: 'Aucune préparation spécifique',
      indications: ['Suivi de grossesse', 'Datation', 'Dépistage anomalies'],
      category: 'Grossesse',
      icon: 'baby',
    },
    {
      id: '5',
      name: 'NFS Complète',
      description: 'Numération Formule Sanguine',
      price: 40000,
      originalPrice: 55000,
      duration: '15 minutes',
      preparation: 'À jeun de préférence',
      indications: ['Anémie', 'Infections', 'Bilan général'],
      category: 'Analyses',
      icon: 'droplet',
    },
    {
      id: '6',
      name: 'Test de Glaire Cervicale',
      description: 'Évaluation de la qualité de la glaire',
      price: 12000,
      originalPrice: 15000,
      duration: '15 minutes',
      preparation: 'Période ovulatoire',
      indications: ['Infertilité', 'Troubles du cycle'],
      category: 'Fertilité',
      icon: 'droplet',
    },
    {
      id: '7',
      name: 'Échographie Abdominale',
      description: 'Examen des organes abdominaux',
      price: 8000,
      originalPrice: 15000,
      duration: '30 minutes',
      preparation: 'À jeun depuis 6 heures',
      indications: ['Douleurs abdominales', 'Bilan hépatique', 'Pathologies digestives'],
      category: 'Imagerie',
      icon: 'activity',
    },
    {
      id: '8',
      name: 'Bilan Thyroïdien',
      description: 'TSH, T3, T4',
      price: 15000,
      originalPrice: 22000,
      duration: '15 minutes',
      preparation: 'À jeun',
      indications: ['Troubles thyroïdiens', 'Fatigue', 'Prise/perte de poids'],
      category: 'Hormones',
      icon: 'stethoscope',
    },
    {
      id: '9',
      name: 'Sérologies Infectieuses',
      description: 'HIV, Hépatite B & C, Syphilis',
      price: 20000,
      originalPrice: 28000,
      duration: '15 minutes',
      preparation: 'Aucune',
      indications: ['Bilan prénatal', 'Dépistage', 'Suivi médical'],
      category: 'Analyses',
      icon: 'heart',
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      microscope: <Microscope className="w-full h-full" />,
      activity: <Activity className="w-full h-full" />,
      heart: <Heart className="w-full h-full" />,
      droplet: <Droplet className="w-full h-full" />,
      baby: <Baby className="w-full h-full" />,
      stethoscope: <Stethoscope className="w-full h-full" />,
    };
    return icons[iconName] || icons.microscope;
  };

  const filteredExams = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(exams.map(exam => exam.category)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-6">
            <Microscope className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Tous nos Examens
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Large gamme d'analyses et d'examens médicaux de haute précision
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un examen (nom, catégorie, description)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-colors text-gray-900 dark:text-white text-lg shadow-xl"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <div
              key={category}
              className="px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-gray-700 dark:text-gray-300 font-semibold"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredExams.map(exam => (
            <button
              key={exam.id}
              onClick={() => setSelectedExam(exam)}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {getIcon(exam.icon)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {exam.name}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {exam.category}
              </div>
              {exam.originalPrice && (
                <div className="space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    {exam.originalPrice.toLocaleString()} FCFA
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    {exam.price.toLocaleString()} FCFA
                  </div>
                </div>
              )}
              {!exam.originalPrice && (
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {exam.price.toLocaleString()} FCFA
                </div>
              )}
            </button>
          ))}
        </div>

        {filteredExams.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-20 h-20 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aucun examen trouvé pour "{searchTerm}"
            </p>
          </div>
        )}

        {selectedExam && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-4">
                    {getIcon(selectedExam.icon)}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedExam.name}
                  </h2>
                  <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold">
                    {selectedExam.category}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExam(null)}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedExam.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-gray-700 rounded-2xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900 dark:text-white">Durée</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{selectedExam.duration}</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-gray-700 rounded-2xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900 dark:text-white">Préparation</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{selectedExam.preparation}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      Indications
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedExam.indications.map((indication, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{indication}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      {selectedExam.originalPrice && (
                        <div className="text-lg text-gray-500 dark:text-gray-400 line-through mb-1">
                          {selectedExam.originalPrice.toLocaleString()} FCFA
                        </div>
                      )}
                      <div className="text-4xl font-bold text-blue-600">
                        {selectedExam.price.toLocaleString()} FCFA
                      </div>
                    </div>
                    {selectedExam.originalPrice && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold">
                        Économisez{' '}
                        {(selectedExam.originalPrice - selectedExam.price).toLocaleString()} FCFA
                      </div>
                    )}
                  </div>

                  <button
  onClick={() => {
    const phoneNumber = '237698032281'; // ton numéro WhatsApp
    const message = encodeURIComponent(
      `Bonjour, je souhaite réserver l'examen : ${selectedExam?.name}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }}
  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
>
  Réserver cet examen
</button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
