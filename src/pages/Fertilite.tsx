import { useState } from 'react';
import { Heart, CheckCircle, FileText, Download, ArrowRight } from 'lucide-react';

export default function Fertilite() {
  const [selectedGender, setSelectedGender] = useState<'femme' | 'homme'>('femme');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const femmeTests = [
    'Echographie pelvienne',
    'Chlamydia(IgM , IgG)',
    'Mycoplasme +ATB',
    'FSH',
    'LH(test dovulation)',
    'Syphilis',
    'Prelevement Vaginal + ATB',
    'Hepatite B et C ',
    'Herpes I  et II',
    'VIH',
  ];

  const hommeTests = [
    'Spermogramme ',
    'Spermoculture + ATB',
    'Syphilis',
    'Testosterone Totale ',
    'Herpes I et II',
    'Hepatite B et C ',
    'VIH',
    'Chlamydia (IgM , IgG',
    'Echographie testiculaire ',
    'FSH',
  ];

  const quizQuestions = [
    {
      question: 'Depuis combien de temps essayez-vous de concevoir ?',
      options: ['Moins de 6 mois', '6-12 mois', 'Plus d\'un an', 'Plus de 2 ans'],
    },
    {
      question: 'Avez-vous des antécédents médicaux particuliers ?',
      options: ['Aucun', 'Troubles hormonaux', 'Chirurgie antérieure', 'Autres pathologies'],
    },
    {
      question: 'Quel est votre âge ?',
      options: ['Moins de 30 ans', '30-35 ans', '35-40 ans', 'Plus de 40 ans'],
    },
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(-1); // quiz terminé
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
  };

  const getRecommendedPack = () => {
    if (quizAnswers.includes('Plus de 2 ans') || quizAnswers.includes('Troubles hormonaux')) {
      return 'Bilan complet (Femme + Homme)';
    }
    return selectedGender === 'femme' ? 'Bilan Femme' : 'Bilan Homme';
  };

  const whatsappLink = (pack: string) => {
    const phone = '237698032281';
    const message = `Bonjour, je souhaite réserver le ${pack}. Merci !`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bilan de Fertilité
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Identifier les causes d'infertilité pour un projet parental réussi
          </p>
        </div>

        {/* Sélecteur Femme/Homme */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setSelectedGender('femme')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedGender === 'femme'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Femme
            </button>
            <button
              onClick={() => setSelectedGender('homme')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedGender === 'homme'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Homme
            </button>
          </div>
        </div>

        {/* Cartes Femme/Homme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Femme */}
          <div
            className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 border-4 ${
              selectedGender === 'femme'
                ? 'border-pink-500 shadow-pink-500/30'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div
              className="w-full h-64 rounded-2xl mb-6 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/pexels-rdne-6849529.jpg)',
              }}
            ></div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Bilan Fertilité Femme
            </h3>
            <div className="space-y-3 mb-8">
              {femmeTests.map((test, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{test}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-gray-500 line-through text-xl">
                    105 000 FCFA
                  </span>
                </div>
                <div className="text-4xl font-bold text-pink-600">
                  50 000 FCFA
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-xl text-center font-semibold mb-4">
                Économisez 20 000 FCFA
              </div>
              <a
                href={whatsappLink('Bilan Fertilité Femme')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                Réserver ce bilan
              </a>
            </div>
          </div>

          {/* Homme */}
          <div
            className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 border-4 ${
              selectedGender === 'homme'
                ? 'border-blue-500 shadow-blue-500/30'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div
              className="w-full h-64 rounded-2xl mb-6 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/pexels-mart-production-7089619.jpg)',
              }}
            ></div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Bilan Fertilité Homme
            </h3>
            <div className="space-y-3 mb-8">
              {hommeTests.map((test, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{test}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-gray-500 line-through text-xl">
                    112 500 FCFA
                  </span>
                </div>
                <div className="text-4xl font-bold text-blue-600">
                  48 000 FCFA
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-xl text-center font-semibold mb-4">
                Économisez 20 000 FCFA
              </div>
              <a
                href={whatsappLink('Bilan Fertilité Homme')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                Réserver ce bilan
              </a>
            </div>
          </div>
        </div>

        {/* Quiz interactif */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Quel pack vous convient le mieux ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Répondez à quelques questions pour obtenir une recommandation personnalisée
            </p>
          </div>

          {quizStep >= 0 && quizStep < quizQuestions.length && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Question {quizStep + 1} / {quizQuestions.length}
                  </span>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((quizStep + 1) / quizQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{quizQuestions[quizStep].question}</h3>

              <div className="space-y-3">
                {quizQuestions[quizStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(option)}
                    className="w-full text-left px-6 py-4 bg-gray-200 dark:bg-gray-700 rounded-2xl font-semibold text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {quizStep === -1 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Recommandation personnalisée</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Nous vous recommandons le :</p>
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-6">
                  {getRecommendedPack()}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={whatsappLink(getRecommendedPack())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl font-bold hover:scale-105 flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <span>Prendre rendez-vous</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={resetQuiz}
                    className="px-8 py-4 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Télécharger PDF */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <Download className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Guide complet de la Fertilité</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Téléchargez notre guide gratuit pour tout savoir sur la fertilité, les examens recommandés et les conseils pour maximiser vos chances de conception.
          </p>
          <a
            href="/images/fertilite.pdf"
            download
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger le guide PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
