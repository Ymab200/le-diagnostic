import { useState, useEffect } from 'react';
import { Droplet, CheckCircle, Info, ArrowRight } from 'lucide-react';

export default function ExamenGlaire() {
  const [counters, setCounters] = useState({
    fecondite: 0,
    prix: 0,
    flore: 0,
  });

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  useEffect(() => {
    const targets = { fecondite: 95, prix: 12000, flore: 100 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        fecondite: Math.floor(targets.fecondite * progress),
        prix: Math.floor(targets.prix * progress),
        flore: Math.floor(targets.flore * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const timelineSteps = [
    { title: 'Prise de rendez-vous', description: 'Contactez-nous pour fixer votre rendez-vous', icon: '📅' },
    { title: 'Préparation', description: 'Période d\'abstinence de 2-3 jours recommandée', icon: '📋' },
    { title: 'Prélèvement', description: 'Examen rapide et indolore (10 minutes)', icon: '🔬' },
    { title: 'Analyse', description: 'Étude microscopique de la glaire cervicale', icon: '🧪' },
    { title: 'Résultats', description: 'Disponibles sous 24-48 heures', icon: '📊' },
    { title: 'Consultation', description: 'Interprétation des résultats avec un spécialiste', icon: '👨‍⚕️' },
  ];

  const infoCards = [
    {
      title: 'Qu\'est-ce que la glaire cervicale ?',
      description:
        'La glaire cervicale est une sécrétion produite par le col de l\'utérus. Elle joue un rôle crucial dans la fertilité en facilitant ou bloquant le passage des spermatozoïdes selon la période du cycle menstruel.',
    },
    {
      title: 'Pourquoi cet examen ?',
      description:
        'L\'examen de la glaire permet d\'évaluer la qualité de cette sécrétion, de détecter d\'éventuelles infections et de déterminer le moment optimal pour la conception.',
    },
    {
      title: 'Qui devrait faire cet examen ?',
      description:
        'Toute femme ayant des difficultés à concevoir, des cycles irréguliers, ou souhaitant optimiser ses chances de grossesse. Recommandé après 6-12 mois d\'essais infructueux.',
    },
  ];

  // Génère le lien WhatsApp avec message
  const whatsappLink = (message: string) => {
    const phone = '237698032281';
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-6">
            <Droplet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Examen de la Glaire Cervicale
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Test clé pour évaluer votre fertilité et optimiser vos chances de conception
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 text-white shadow-2xl shadow-pink-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{counters.fecondite}%</div>
              <div className="text-xl font-semibold opacity-90">Taux de Fécondité Optimale</div>
              <p className="mt-4 text-white/80 text-sm">Avec une glaire cervicale de qualité optimale</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{counters.prix.toLocaleString()}</div>
              <div className="text-xl font-semibold opacity-90">FCFA</div>
              <p className="mt-4 text-white/80 text-sm">Prix promotionnel exceptionnel</p>
              <div className="mt-2">
                <span className="line-through opacity-70">15 000 FCFA</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl shadow-green-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{counters.flore}%</div>
              <div className="text-xl font-semibold opacity-90">Flore Protégée</div>
              <p className="mt-4 text-white/80 text-sm">Détection précoce des infections</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <button
                  onMouseEnter={() => setActiveTooltip(index)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="absolute top-6 right-6 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </button>

                {activeTooltip === index && (
                  <div className="absolute top-16 right-6 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl shadow-xl z-10 max-w-xs">
                    Cliquez pour plus d'informations
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pr-12">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                'url(/images/pexels-shvetsa-4226258.jpg)',
              minHeight: '600px',
            }}
          ></div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Déroulement de l'Examen
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Un processus simple et rapide en 6 étapes
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-blue-500 mb-4 transform hover:scale-110 transition-all duration-300 z-10">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evaluation & Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ce que l'examen évalue</h3>
            <div className="space-y-4">
              {[
                'Abondance de la glaire',
                'Filance (élasticité)',
                'Cristallisation',
                'pH de la glaire',
                'Présence de cellules',
                'Compatibilité avec les spermatozoïdes',
                'Infections éventuelles',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-gray-700 rounded-xl hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Offre Spéciale</h3>
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">12 000 FCFA</div>
              <div className="text-xl line-through opacity-70">15 000 FCFA</div>
              <div className="mt-4 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-xl inline-block">Économisez 3 000 FCFA</div>
            </div>
            <p className="text-lg mb-8 opacity-90">
              Profitez de notre prix promotionnel pour réaliser votre examen de la glaire cervicale dans les meilleures conditions.
            </p>
            <a
              href={whatsappLink('Bonjour, je souhaite réserver l\'Examen de la Glaire Cervicale. Merci !')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 space-x-2"
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Prêt à optimiser votre fertilité ?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            L'examen de la glaire cervicale est une étape essentielle pour comprendre votre fertilité. Prenez rendez-vous dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink('Bonjour, je souhaite prendre rendez-vous pour l\'Examen de la Glaire Cervicale. Merci !')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:+237698032281"
              className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
