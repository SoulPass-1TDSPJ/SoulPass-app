import { Link } from "react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

/** Página 404 exibida para qualquer rota não mapeada. */
export default function NotFound() {
  useDocumentTitle("Página não encontrada");

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-soulup-500">Erro 404</p>
      <h1 className="mt-2 text-3xl font-bold text-soulup-900">Página não encontrada</h1>
      <p className="mt-3 text-soulup-900/70">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-soulup-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-soulup-700"
      >
        Voltar para a Home
      </Link>
    </section>
  );
}
