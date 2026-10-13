export const WHATSAPP_NUMBER = "5581983755704";
export const ENDERECO = "R. Maj. Med. Vicente Fonseca de Matos, 564 - Candeias, Jaboatão dos Guararapes - PE, 54430-000";

export function whatsappLink(servico?: string) {
  const msg = servico
    ? `Olá! Gostaria de agendar um horário para *${servico}*. Quais horários estão disponíveis?`
    : "Olá! Gostaria de agendar um horário na barbearia. Quais horários estão disponíveis?";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const PRECOS = [
  { nome: "Corte masculino", desc: "Tesoura ou máquina, lavagem inclusa", preco: 45 },
  { nome: "Barba", desc: "Toalha quente e navalha", preco: 35 },
  { nome: "Corte + Barba", desc: "O combo completo", preco: 70 },
  { nome: "Degradê (fade)", desc: "Acabamento na navalha", preco: 50 },
  { nome: "Pigmentação", desc: "Barba ou cabelo", preco: 30 },
  { nome: "Sobrancelha", desc: "Na navalha ou pinça", preco: 15 },
];
