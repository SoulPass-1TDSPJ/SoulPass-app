import type { NavLink } from "../types";

// Itens de navegação principal, usados pelo Header/Navbar em todas as páginas.
export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Integrantes", to: "/integrantes" },
  { label: "Sobre", to: "/sobre" },
  { label: "FAQ", to: "/faq" },
  { label: "Solução", to: "/solucao" },
  { label: "Contato", to: "/contato" },
];
