import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variante = "primaria" | "secundaria" | "fantasma";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: Variante;
}

const variantes: Record<Variante, string> = {
  primaria:
    "bg-soulup-500 text-white hover:bg-soulup-700 focus-visible:outline-soulup-900",
  secundaria:
    "bg-white text-soulup-700 border border-soulup-500 hover:bg-soulup-100",
  fantasma: "bg-transparent text-soulup-700 hover:bg-soulup-100",
};

/**
 * Botão padrão do design system SoulPass. Usado tanto para navegação
 * (envolvido por <Link>) quanto para ações de formulário (type="submit").
 */
export default function Button({
  children,
  variante = "primaria",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantes[variante]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
