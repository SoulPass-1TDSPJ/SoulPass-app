import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Contêiner genérico com o "look" padrão do site (cantos arredondados,
 * sombra suave, respiro interno) reaproveitado por FAQ, Sobre, Solução etc.
 */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-soulup-100 bg-white p-6 shadow-sm shadow-soulup-900/5 ${className}`}
    >
      {children}
    </div>
  );
}
