import type { ReactNode } from "react";
import { Link } from "react-router";

type Variante = "primaria" | "secundaria" | "fantasma";

interface LinkButtonProps {
  to: string;
  children: ReactNode;
  variante?: Variante;
  externo?: boolean;
  className?: string;
}

const variantes: Record<Variante, string> = {
  primaria:
    "bg-soulup-500 text-white hover:bg-soulup-700 focus-visible:outline-soulup-900",
  secundaria:
    "bg-white text-soulup-700 border border-soulup-500 hover:bg-soulup-100",
  fantasma: "bg-transparent text-soulup-700 hover:bg-soulup-100",
};

/**
 * Mesma linguagem visual do Button, mas para navegação (rotas internas
 * via React Router ou links externos como o vídeo pitch no YouTube).
 */
export default function LinkButton({
  to,
  children,
  variante = "primaria",
  externo = false,
  className = "",
}: LinkButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantes[variante]} ${className}`;

  if (externo) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
