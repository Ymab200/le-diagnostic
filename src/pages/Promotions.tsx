import { useState } from 'react';
import { Tag, Search, ShoppingCart, X, CheckCircle } from 'lucide-react';

interface Promo {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  description: string;
}

export default function Promotions() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<Promo[]>([]);
  const [showCart, setShowCart] = useState(false);

  const promotions: Promo[] = [
    { id: '1', name: 'Pelvienne', price: 7000, originalPrice: 12000, category: 'Bilan Echographie', description: 'Échographie de la région pelvienne' },
{ id: '2', name: 'Obstetrical', price: 7000, originalPrice: 12000, category: 'Bilan Echographie', description: 'Échographie pour le suivi de la grossesse' },
{ id: '3', name: 'Endovaginal', price: 10000, originalPrice: 17000, category: 'Bilan Echographie', description: 'Échographie endovaginale haute précision' },

{ id: '4', name: 'Chlamydia direct', price: 30000, originalPrice: 40000, category: 'Bilan infectieux', description: 'Dépistage direct de la chlamydia' },
{ id: '5', name: 'Electrophorese', price: 40000, originalPrice: 55000, category: 'Bilan Prenatal', description: 'Analyse des protéines sanguines' },
{ id: '6', name: 'Groupe sanguin + Rhesus', price: 40000, originalPrice: 50000, category: 'Bilan Prenatal', description: 'Détermination du groupe sanguin et du rhésus' },

{ id: '7', name: 'Hepatite B + Hepatite C', price: 80000, originalPrice: 140000, category: 'Bilan Prenatal', description: 'Dépistage des hépatites virales B et C' },
{ id: '8', name: 'Hepatite B + C', price: 60000, originalPrice: 85000, category: 'Bilan infectieux', description: 'Sérologie hépatites B et C' },

{ id: '9', name: 'PCV + ATB', price: 40000, originalPrice: 47500, category: 'Bilan Prenatal', description: 'Analyse urinaire et recherche d’infection' },
{ id: '10', name: 'PU/PCV + ATB', price: 30000, originalPrice: 35000, category: 'Bilan infectieux', description: 'Analyse des urines et antibiogramme' },

{ id: '11', name: 'Chlamydia direct', price: 30000, originalPrice: 40000, category: 'Fertilité Femme', description: 'Dépistage de la chlamydia chez la femme' },
{ id: '12', name: 'Spermogramme', price: 35000, originalPrice: 47000, category: 'Fertilité Homme', description: 'Analyse complète du sperme' },

{ id: '13', name: 'Toxoplasmose', price: 40000, originalPrice: 55000, category: 'Bilan Prenatal', description: 'Sérologie toxoplasmose IgG/IgM' },
{ id: '14', name: 'Mycoplasme', price: 30000, originalPrice: 40000, category: 'Fertilité Femme', description: 'Dépistage du mycoplasme génital' },

{ id: '15', name: 'Sérologie HIV', price: 5000, originalPrice: 8000, category: 'Bilan infectieux', description: 'Test de dépistage du VIH' },
{ id: '16', name: 'PCV + ATB', price: 30000, originalPrice: 45000, category: 'Fertilité Femme', description: 'Analyse urinaire et recherche d’infection' },

{ id: '17', name: 'Echographie pelvienne', price: 30000, originalPrice: 35000, category: 'Fertilité Femme', description: 'Évaluation échographique des organes pelviens' },
{ id: '18', name: 'Spermoculture', price: 35000, originalPrice: 45000, category: 'Fertilité Homme', description: 'Culture du sperme et recherche d’infection' },

{ id: '19', name: 'Spermocytogramme', price: 35000, originalPrice: 45000, category: 'Fertilité Homme', description: 'Étude morphologique des spermatozoïdes' },
{ id: '20', name: 'Electrophorese HB', price: 10000, originalPrice: 15000, category: 'Bilan routine', description: 'Analyse des hémoglobines' },

{ id: '21', name: 'Chlamydia direct', price: 10000, originalPrice: 20000, category: 'Fertilité Homme', description: 'Dépistage de la chlamydia chez l’homme' },
{ id: '22', name: 'Rubeole IgG/IgM', price: 40000, originalPrice: 50000, category: 'Bilan Prenatal', description: 'Sérologie rubéole IgG/IgM' },

{ id: '23', name: 'Groupes sanguins / Rhesus', price: 10000, originalPrice: 15000, category: 'Bilan routine', description: 'Détermination des groupes sanguins' },
{ id: '24', name: 'PU + ATB', price: 35000, originalPrice: 40000, category: 'Fertilité Homme', description: 'Analyse urinaire et antibiogramme' },

  ];

  const categories = ['Tous', ...Array.from(new Set(promotions.map(p => p.category)))];

  const filteredPromotions = promotions.filter(promo => {
    const matchesCategory = selectedCategory === 'Tous' || promo.category === selectedCategory;
    const matchesSearch = promo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          promo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (promo: Promo) => {
    if (!cart.find(item => item.id === promo.id)) {
      setCart([...cart, promo]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalOriginal = cart.reduce((sum, item) => sum + item.originalPrice, 0);
  const totalPromo = cart.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = totalOriginal - totalPromo;

  // Lien WhatsApp avec message pré-rempli
  const whatsappLink = () => {
    if (cart.length === 0) return '#';
    const phone = '237698032281'; // Remplace par ton numéro
    const message = `Bonjour, je souhaite réserver les examens suivants:\n${cart.map(item => `- ${item.name} (${item.price.toLocaleString()} FCFA)`).join('\n')}\nTotal: ${totalPromo.toLocaleString()} FCFA`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl mb-6">
            <Tag className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Promotions Spéciales
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Profitez de nos tarifs exceptionnels sur tous nos examens
          </p><p className="text-x text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Valider Vos commandes dans Panier 
          </p>
        </div>

        {/* Search & Cart */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un examen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-colors text-gray-900 dark:text-white"
            />
          </div>

          <button
            onClick={() => setShowCart(!showCart)}
            className="relative px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Panier ({cart.length})</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPromotions.map(promo => (
            <div
              key={promo.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-sm font-semibold">
                  {promo.category}
                </div>
                <div className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg text-sm font-bold">
                  -{Math.round(((promo.originalPrice - promo.price) / promo.originalPrice) * 100)}%
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {promo.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {promo.description}
              </p>

              <div className="mb-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {promo.price.toLocaleString()} FCFA
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {promo.originalPrice.toLocaleString()} FCFA
                </div>
              </div>

              <button
                onClick={() => addToCart(promo)}
                disabled={cart.some(item => item.id === promo.id)}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  cart.some(item => item.id === promo.id)
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-105 hover:shadow-lg'
                }`}
              >
                {cart.some(item => item.id === promo.id) ? 'Dans le panier' : 'Ajouter au panier'}
              </button>
            </div>
          ))}
        </div>

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon Panier</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-600 dark:text-gray-400">Votre panier est vide</div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.price.toLocaleString()} FCFA</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-3">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Prix original:</span>
                      <span className="line-through">{totalOriginal.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-green-600 dark:text-green-400 font-semibold">
                      <span>Économies:</span>
                      <span>-{totalSavings.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-gray-900 dark:text-white">
                      <span>Total:</span>
                      <span>{totalPromo.toLocaleString()} FCFA</span>
                    </div>
                  </div>

                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 block text-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Acheter sur WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        )}

        <div
          className="rounded-3xl p-12 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Économisez jusqu'à 40% sur vos examens
            </h2>
            <p className="text-xl mb-8">
              Profitez de nos promotions exceptionnelles toute l'année
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Qualité garantie • Prix imbattables</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
