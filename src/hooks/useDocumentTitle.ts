import { useEffect } from "react";

/**
 * Atualiza o <title> do documento a cada troca de página da SPA,
 * já que não há mais um index.html por página como no projeto estático.
 */
export function useDocumentTitle(titulo: string): void {
  useEffect(() => {
    const anterior = document.title;
    document.title = `SoulPass — ${titulo}`;
    return () => {
      document.title = anterior;
    };
  }, [titulo]);
}
