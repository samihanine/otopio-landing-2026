export type Testimonial = {
  id: string;
  name: string;
  handle: string;
  image: string;
  quoteTitle: string;
  quoteDescription: string;
  url: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ethan Moore",
    handle: "Co-founder, NovaTech",
    image:
      "https://images.unsplash.com/photo-1728484011399-380a83fbd68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    quoteTitle: "Sharp, clean brand identity",
    quoteDescription:
      "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
    url: "#",
  },
  {
    id: "2",
    name: "Sarah Chen",
    handle: "CEO, PixelFlow",
    image:
      "https://images.unsplash.com/photo-1537183673931-f890242dbaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    quoteTitle: "Seamless design process",
    quoteDescription:
      "The design process was seamless. They understood our vision from day one and delivered beyond expectations.",
    url: "#",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    handle: "Founder, StreamLab",
    image:
      "https://images.unsplash.com/photo-1760920193193-91dd96af7862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    quoteTitle: "Creative and incredibly fast",
    quoteDescription:
      "Working with Otopio transformed our brand identity completely. Professional, creative, and incredibly fast.",
    url: "#",
  },
  {
    id: "4",
    name: "Léa Dubois",
    handle: "Directrice Artistique, Artify",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    quoteTitle: "Expérience utilisateur exceptionnelle",
    quoteDescription:
      "La refonte de notre plateforme a dépassé nos espérances. L'attention aux détails est phénoménale.",
    url: "#",
  },
  {
    id: "5",
    name: "Thomas Bernard",
    handle: "CTO, GreenLog",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    quoteTitle: "Partenaire technique de confiance",
    quoteDescription:
      "Otopio n'est pas seulement une agence design, c'est un véritable partenaire qui comprend les enjeux techniques.",
    url: "#",
  },
];
