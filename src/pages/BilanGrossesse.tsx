import { useState } from 'react';
import { Baby, CheckCircle, Calendar, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BilanGrossesse() {
  const [selectedTrimester, setSelectedTrimester] = useState(1);
  const [selectedWeek, setSelectedWeek] = useState(12);

  const packs = [
    {
      title: 'Pack Suivi Complet',
      price: 95000,
      originalPrice: 125000,
      features: [
        'Toxoplasmose(IgM , IgM',
        'Rubeole',
        'Syphilis(TPHA/VDLR)',
        'PCV + ATB',
        'Glycémie à jeun',
        'Groupe sanguin & Rhésus',
        'Hepatite B & C',
        'NFS complète',
        'Albimune-Sucre',
        'VIH',
        'NFS',
      ],
      gradient: 'from-pink-500 to-rose-600',
      recommended: true,
    },
    {
      title: 'Échographie Obstétricale',
      price: 7000,
      originalPrice: 10000,
      features: [
        'Échographie 2D/3D',
        'Évaluation du développement fœtal',
        'Mesures biométriques',
        'Photos incluses',
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Analyses 1er Trimestre',
      price: 35000,
      originalPrice: 45000,
      features: [
        'Groupe sanguin & Rhésus',
        'Sérologies (Toxo, Rubéole, HIV)',
        'NFS complète',
        'Glycémie',
        'TPHA/VDRL',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const trimesterAdvice = {
    1: {
      title: 'Premier Trimestre (1-13 semaines)',
      advice: [
        'Prise d\'acide folique quotidienne',
        'Éviter alcool, tabac et médicaments sans avis médical',
        'Première échographie de datation',
        'Tests sanguins de dépistage',
        'Repos et hydratation régulière',
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    2: {
      title: 'Deuxième Trimestre (14-27 semaines)',
      advice: [
        'Échographie morphologique (20-22 semaines)',
        'Test de dépistage du diabète gestationnel',
        'Surveillance de la tension artérielle',
        'Supplémentation en fer si nécessaire',
        'Activité physique modérée recommandée',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    3: {
      title: 'Troisième Trimestre (28-40 semaines)',
      advice: [
        'Échographie du 3ème trimestre',
        'Prélèvement vaginal (streptocoque B)',
        'Surveillance rapprochée',
        'Préparation à l\'accouchement',
        'Repos et préparation de la valise maternité',
      ],
      color: 'from-pink-500 to-rose-600',
    },
  };

  const weeks = Array.from({ length: 40 }, (_, i) => i + 1);

  const getWeekInfo = (week: number) => {
    if (week <= 13) return { trimester: 1, info: 'Formation des organes vitaux' };
    if (week <= 27) return { trimester: 2, info: 'Croissance rapide et mouvements' };
    return { trimester: 3, info: 'Maturation et préparation à la naissance' };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl mb-6">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bilan de Grossesse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accompagnement complet pour une grossesse sereine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 ${
                pack.recommended ? 'border-4 border-pink-500 shadow-pink-500/30 relative' : ''
              }`}
            >
              {pack.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Le Plus Complet</span>
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pack.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <Baby className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {pack.title}
              </h3>

              <div className="space-y-3 mb-8">
                {pack.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                    {pack.originalPrice.toLocaleString()} FCFA
                  </span>
                  <div className="text-3xl font-bold text-pink-600">
                    {pack.price.toLocaleString()} FCFA
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-center font-semibold text-sm mb-4">
                  Économisez {(pack.originalPrice - pack.price).toLocaleString()} FCFA
                </div>
                <button
  onClick={() => {
    const phoneNumber = "227698032281"; // ton numéro WhatsApp
    const message = encodeURIComponent(`Bonjour, je souhaite choisir le pack: ${pack.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }}
  className={`w-full block text-center px-6 py-3 bg-gradient-to-r ${pack.gradient} text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300`}
>
  Choisir ce pack
</button>

              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-pink-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Calendrier de Grossesse Interactif
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Suivez votre grossesse semaine par semaine
            </p>
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sélectionnez votre semaine de grossesse: Semaine {selectedWeek}
            </label>
            <input
              type="range"
              min="1"
              max="40"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              style={{
                background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${(selectedWeek / 40) * 100}%, #e5e7eb ${(selectedWeek / 40) * 100}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span>Semaine 1</span>
              <span>Semaine 40</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Semaine {selectedWeek}
              </h3>
              <div className={`px-4 py-2 bg-gradient-to-r ${getWeekInfo(selectedWeek).trimester === 1 ? 'from-blue-500 to-cyan-600' : getWeekInfo(selectedWeek).trimester === 2 ? 'from-purple-500 to-pink-600' : 'from-pink-500 to-rose-600'} text-white rounded-xl font-semibold`}>
                Trimestre {getWeekInfo(selectedWeek).trimester}
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {getWeekInfo(selectedWeek).info}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conseils par Trimestre
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Informations essentielles pour chaque étape
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
              {[1, 2, 3].map((trimester) => (
                <button
                  key={trimester}
                  onClick={() => setSelectedTrimester(trimester)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedTrimester === trimester
                      ? `bg-gradient-to-r ${trimesterAdvice[trimester as keyof typeof trimesterAdvice].color} text-white shadow-lg`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Trimestre {trimester}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {trimesterAdvice[selectedTrimester as keyof typeof trimesterAdvice].title}
            </h3>
            <div className="space-y-4">
              {trimesterAdvice[selectedTrimester as keyof typeof trimesterAdvice].advice.map(
                (advice, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-4 bg-gradient-to-r ${trimesterAdvice[selectedTrimester as keyof typeof trimesterAdvice].color} bg-opacity-10 rounded-2xl`}
                  >
                    <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200 text-lg">
                      {advice}                 
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl p-12 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              'url(/images/enceint.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-rose-600/90"></div>
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Une grossesse sereine commence ici
            </h2>
            <p className="text-xl mb-8">
              Bénéficiez d'un suivi médical complet tout au long de votre grossesse
            </p>
           <button
  onClick={() => {
    const phoneNumber = "229XXXXXXXX"; // ton numéro WhatsApp
    const message = encodeURIComponent("Bonjour, je souhaite commencer mon suivi de grossesse");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }}
  className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 space-x-2"
>
  <span>Commencer mon suivi</span>
  <ArrowRight className="w-5 h-5" />
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
