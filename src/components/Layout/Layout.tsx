import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useWatsonAssistant } from "../../hooks/useWatsonAssistant";

/**
 * Layout raiz da SPA: cabeçalho e rodapé fixos, com o conteúdo de cada
 * rota renderizado no <Outlet />. É o "element" da rota-pai no router
 * (createBrowserRouter), então também é o lugar certo para hooks que
 * devem rodar uma única vez para toda a aplicação (scroll e chatbot).
 */
export default function Layout() {
  useScrollToTop();
  useWatsonAssistant();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
