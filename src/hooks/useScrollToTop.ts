import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Rola a janela para o topo sempre que a rota muda — necessário em uma SPA,
 * já que o navegador não reseta o scroll como faria entre páginas HTML separadas.
 */
export function useScrollToTop(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
}
