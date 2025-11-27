import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '237698032281';
  const message = encodeURIComponent('Bonjour, je souhaite prendre rendez-vous.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:scale-110 hover:shadow-green-500/70 transition-all duration-300 animate-bounce-slow group"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
}
