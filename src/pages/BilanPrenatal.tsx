import { useState } from 'react';
import { Heart, CheckCircle, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BilanPrenatal() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [isPlaying, setIsPlaying] = useState(false);

  const packs = [
    {
      title: 'Bilan Prénatal Complet',
      price: 57500,
      originalPrice: 100000,
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
        'TDR/GE',
      ],
      gradient: 'from-pink-500 to-rose-600',
      recommended: true,
    },
    {
      title: 'Bilan Prénatal Essentiel',
      price: 25000,
      originalPrice: 60000,
      features: [
        'Groupe sanguin & Rhésus',
        'NFS complète',
        'Sérologies HIV & Hépatite B',
        'Glycémie',
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Bilan Prénatal Premium',
      price: 40000,
      originalPrice: 95000,
      features: [
        'Tous les examens du bilan complet',
        'Échographie de datation',
        'Dosage bêta-hCG',
        '3 consultations prénatales',
        'Guide de grossesse personnalisé',
        'Suivi nutrition inclus',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const checklist = [
    { id: '1', item: 'Prise de rendez-vous pour consultation prénatale', category: 'Préparation' },
    { id: '2', item: 'Réalisation des analyses sanguines', category: 'Examens' },
    { id: '3', item: 'Sérologies infectieuses', category: 'Examens' },
    { id: '4', item: 'Échographie de datation', category: 'Imagerie' },
    { id: '5', item: 'Consultation des résultats avec médecin', category: 'Suivi' },
    { id: '6', item: 'Mise en place du suivi mensuel', category: 'Suivi' },
    { id: '7', item: 'Prescription d\'acide folique', category: 'Traitement' },
    { id: '8', item: 'Conseils nutrition et hygiène de vie', category: 'Prévention' },
  ];

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / checklist.length) * 100;

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bilan Prénatal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Préparez votre grossesse dans les meilleures conditions
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
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    Recommandé
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pack.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <Heart className="w-8 h-8 text-white" />
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Checklist Interactive
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Progression</div>
                <div className="text-2xl font-bold text-pink-600">
                  {checkedCount}/{checklist.length}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span className="text-white text-xs font-bold">{Math.round(progress)}%</span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map(item => (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  checkedItems[item.id]
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    checkedItems[item.id]
                      ? 'border-white bg-white'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {checkedItems[item.id] && (
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-semibold mb-1 ${
                      checkedItems[item.id] ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {item.category}
                    </div>
                    <div className={`font-medium ${
                      checkedItems[item.id] ? 'line-through' : ''
                    }`}>
                      {item.item}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {progress === 100 && (
            <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl text-center animate-bounce">
              <CheckCircle className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Félicitations !</h3>
              <p className="text-lg">Vous avez complété toutes les étapes du bilan prénatal</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <button
              onClick={toggleAudio}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl mb-6 hover:scale-105 transition-transform"
            >
              <span className="font-bold text-lg">Écouter les conseils</span>
              {isPlaying ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Importance du bilan prénatal
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le bilan prénatal est une étape essentielle avant de concevoir. Il permet de détecter et de traiter d'éventuels problèmes de santé qui pourraient affecter votre grossesse ou la santé de votre bébé.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ces examens permettent également de vérifier votre immunité contre certaines maladies infectieuses et d'optimiser votre état de santé général avant la conception.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-pink-500 pl-4">
                "Un bilan prénatal complet augmente significativement les chances d'une grossesse sereine et d'un bébé en bonne santé."
              </p>
            </div>
          </div>

          <div
            className="rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                'url(/src/bebe.jpeg)',
              minHeight: '500px',
            }}
          ></div>
        </div>

        <div
          className="rounded-3xl p-12 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              'url(/iamges/pexels-rdne-6849529.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-rose-600/90"></div>
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Préparez votre future grossesse sereinement
            </h2>
            <p className="text-xl mb-8">
              Un bilan complet pour démarrer votre projet parental dans les meilleures conditions
            </p>
            <button
  onClick={() => {
    const phoneNumber = "227692574823"; // ton numéro WhatsApp
    const message = encodeURIComponent("Bonjour, je souhaite réserver mon bilan prénatal");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }}
  className="inline-block px-8 py-4 bg-white text-pink-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
>
  Réserver mon bilan prénatal
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
