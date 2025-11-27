import { useState } from 'react';
import { Activity, CheckCircle, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BoosterSpermatozoides() {
  const [currentTip, setCurrentTip] = useState(0);
  const [simulationStep, setSimulationStep] = useState(0);
  const [simulationAnswers, setSimulationAnswers] = useState<string[]>([]);

  const packs = [
    {
      title: 'Analyse Complète',
      price: 35000,
      originalPrice: 45000,
      features: [
        'Spermogramme détaillé',
        'Test de mobilité',
        'Morphologie spermatique',
        'Consultation incluse',
        'Necrozoospermie',
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Pack Vitaminothérapie',
      price: 55000,
      originalPrice: 70000,
      features: [
        'Augmente la libido',
        'stabilise la taille des testicules',
        'boost des spermatozoides',
        'stabilise le pH du sperme ',
        'Azoospermie',
        'Obligospermie',
        'Teratospermie',
        'Necrozoospermie',
        'Activation de la spermatogenese',
        'Cryptozoospermie',
      
      
      ],
      gradient: 'from-green-500 to-emerald-600',
      recommended: true,
    },
    {
      title: 'Pack Booster Premium',
      price: 85000,
      originalPrice: 110000,
      features: [
        'Tous les examens',
        'Vitaminothérapie 6 mois',
        'Suivi personnalisé',
        'Échographie testiculaire',
        'Consultation spécialisée',
        'Activateur de la Spermatogenese',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const nutritionTips = [
    {
      title: 'Zinc et Sélénium',
      description: 'Essentiels pour la production et la qualité des spermatozoïdes',
      image: '/images/pexels-pixabay-208512.jpg',
    },
    {
      title: 'Antioxydants',
      description: 'Protègent les spermatozoïdes du stress oxydatif',
      image: '/images/pexels-chokniti-khongchum-1197604-2280549.jpg',
    },
    {
      title: 'Oméga-3',
      description: 'Améliorent la mobilité et la morphologie des spermatozoïdes',
      image: '/images/pexels-artempodrez-4492065.jpg',
    },
    {
      title: 'Vitamine D',
      description: 'Cruciale pour la production de testostérone',
      image: '/images/pexels-pixabay-208512.jpg',
    },
    {
      title: 'Hydratation',
      description: 'Boire 2L d\'eau par jour pour optimiser la production',
      image: '/images/pexels-chokniti-khongchum-1197604-2280549.jpg',
    },
  ];

  const simulationQuestions = [
    {
      question: 'Quel est votre objectif principal ?',
      options: [
        'Améliorer la qualité',
        'Augmenter la quantité',
        'Traiter un problème identifié',
        'Prévention / Optimisation',
      ],
    },
    {
      question: 'Avez-vous déjà fait un spermogramme ?',
      options: ['Oui, résultats normaux', 'Oui, résultats anormaux', 'Non, jamais', 'Je ne sais pas'],
    },
    {
      question: 'Quel est votre budget ?',
      options: ['Moins de 40 000 FCFA', '40 000 - 70 000 FCFA', '70 000 - 100 000 FCFA', 'Plus de 100 000 FCFA'],
    },
  ];

  const nextTip = () => setCurrentTip((prev) => (prev + 1) % nutritionTips.length);
  const prevTip = () => setCurrentTip((prev) => (prev - 1 + nutritionTips.length) % nutritionTips.length);

  const handleSimulationAnswer = (answer: string) => {
    const newAnswers = [...simulationAnswers, answer];
    setSimulationAnswers(newAnswers);

    if (simulationStep < simulationQuestions.length - 1) {
      setSimulationStep(simulationStep + 1);
    } else {
      setSimulationStep(-1);
    }
  };

  const resetSimulation = () => {
    setSimulationStep(0);
    setSimulationAnswers([]);
  };

  const getRecommendedPack = () => {
    if (simulationAnswers.includes('Traiter un problème identifié') || simulationAnswers.includes('Plus de 100 000 FCFA')) {
      return 'Pack Booster Premium';
    } else if (simulationAnswers.includes('Augmenter la quantité') || simulationAnswers.includes('40 000 - 70 000 FCFA')) {
      return 'Pack Vitaminothérapie';
    }
    return 'Analyse Complète';
  };

  // Génère le lien WhatsApp avec message
  const whatsappLink = (pack: string) => {
    const phone = '237698032281';
    const message = `Bonjour, je souhaite réserver le pack "${pack}". Merci !`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-6">
            <Activity className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Booster les Spermatozoïdes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solutions personnalisées pour améliorer la qualité et la quantité de vos spermatozoïdes
          </p>
        </div>

        {/* Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 relative ${
                pack.recommended ? 'border-4 border-green-500 shadow-green-500/30' : ''
              }`}
            >
              {pack.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Recommandé</span>
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pack.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <Activity className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{pack.title}</h3>

              <div className="space-y-3 mb-8">
                {pack.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                    {pack.originalPrice.toLocaleString()} FCFA
                  </span>
                  <div className="text-3xl font-bold text-blue-600">
                    {pack.price.toLocaleString()} FCFA
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-center font-semibold text-sm mb-4">
                  Économisez {(pack.originalPrice - pack.price).toLocaleString()} FCFA
                </div>
                <a
                  href={whatsappLink(pack.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center px-6 py-3 bg-gradient-to-r ${pack.gradient} text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300`}
                >
                  Choisir ce pack
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Simulation */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quel pack pour moi ?</h2>
            <p className="text-gray-600 dark:text-gray-300">Simulateur intelligent pour trouver le pack adapté à vos besoins</p>
          </div>

          {simulationStep >= 0 && simulationStep < simulationQuestions.length && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Étape {simulationStep + 1} / {simulationQuestions.length}
                  </span>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {Math.round(((simulationStep + 1) / simulationQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((simulationStep + 1) / simulationQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{simulationQuestions[simulationStep].question}</h3>

              <div className="space-y-3">
                {simulationQuestions[simulationStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSimulationAnswer(option)}
                    className="w-full text-left px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl font-semibold text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {simulationStep === -1 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Pack recommandé</h3>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-6">
                  {getRecommendedPack()}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={whatsappLink(getRecommendedPack())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Réserver ce pack</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={resetSimulation}
                    className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Nutrition Tips */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Conseils Nutrition & Hygiène de Vie
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Optimisez naturellement la qualité de vos spermatozoïdes
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="h-96 bg-cover bg-center rounded-2xl mb-6"
                style={{ backgroundImage: `url(${nutritionTips[currentTip].image})` }}
              ></div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{nutritionTips[currentTip].title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{nutritionTips[currentTip].description}</p>

              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={prevTip}
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>

                <div className="flex space-x-2">
                  {nutritionTips.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTip(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTip ? 'bg-blue-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextTip}
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-3xl p-12 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Famille heureuse commence ici</h2>
            <p className="text-xl mb-8">Faites le premier pas vers votre projet parental</p>
            <a
              href={whatsappLink('Pack personnalisé')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 space-x-2"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
