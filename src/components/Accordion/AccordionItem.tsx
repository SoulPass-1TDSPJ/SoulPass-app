import { useState } from "react";
import type { FaqItem } from "../../types";

interface AccordionItemProps {
  item: FaqItem;
}

/**
 * Item individual do acordeão de FAQ. Cada item controla seu próprio
 * estado de aberto/fechado com useState (equivalente ao antigo toggleFaq
 * em js/faq.js, agora sem manipulação direta do DOM).
 */
export default function AccordionItem({ item }: AccordionItemProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="rounded-2xl border border-soulup-100 bg-white shadow-sm shadow-soulup-900/5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-soulup-900"
        aria-expanded={aberto}
        onClick={() => setAberto((valor) => !valor)}
      >
        {item.pergunta}
        <span
          aria-hidden="true"
          className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-soulup-100 text-soulup-700"
        >
          {aberto ? "−" : "+"}
        </span>
      </button>
      {aberto ? (
        <div className="px-5 pb-5 text-sm leading-relaxed text-soulup-900/75">
          <p>{item.resposta}</p>
        </div>
      ) : null}
    </div>
  );
}
