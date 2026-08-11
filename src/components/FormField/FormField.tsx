import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  erro?: string;
  children: ReactNode;
  obrigatorio?: boolean;
}

/**
 * Envolve label + input + mensagem de erro com o mesmo espaçamento e
 * tipografia em todos os formulários (Contato, Login, Cadastro).
 * O <input> em si é passado via props.children para funcionar com
 * o register() do React Hook Form sem precisar de forwardRef aqui.
 */
export default function FormField({
  label,
  htmlFor,
  erro,
  children,
  obrigatorio = true,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-soulup-900">
        {label} {obrigatorio ? <span aria-hidden="true">*</span> : null}
      </label>
      {children}
      {erro ? (
        <span role="alert" className="text-xs font-medium text-red-600">
          {erro}
        </span>
      ) : null}
    </div>
  );
}
