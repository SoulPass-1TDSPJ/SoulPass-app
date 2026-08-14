import { Link, useParams } from "react-router";
import { entregaveis } from "../../data/entregaveis";
import { LinkButton } from "../../components/Button";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

/** Rota dinâmica /solucao/:id — detalhe de um entregável específico. */
export default function EntregavelDetalhe() {
  const { id } = useParams<{ id: string }>();
  const item = entregaveis.find((entregavel) => entregavel.id === id);

  useDocumentTitle(item ? item.titulo : "Entregável não encontrado");

  if (!item) {
    return (
      <section className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-soulup-900">Entregável não encontrado</h1>
        <p className="mt-3 text-soulup-900/70">
          Não encontramos esse item. Volte para a página de solução para ver
          todos os entregáveis disponíveis.
        </p>
        <Link
          to="/solucao"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-soulup-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Ver todos os entregáveis
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 tablet:py-24">
      <Link to="/solucao" className="text-sm font-semibold text-soulup-700 hover:underline">
        ← Voltar para a solução
      </Link>

      <div className="mt-6 rounded-2xl border border-soulup-100 bg-white p-8 shadow-sm shadow-soulup-900/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-soulup-500">
          {item.emoji} {item.materia}
        </p>
        <h1 className="mt-2 text-2xl font-bold text-soulup-900">{item.titulo}</h1>
        <p className="mt-4 text-soulup-900/80">{item.descricao}</p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {item.linksExtras && item.linksExtras.length > 0 ? (
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-soulup-900/60">
              Materiais de apoio
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.linksExtras.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-soulup-100 bg-soulup-100/60 px-4 py-2 text-sm font-medium text-soulup-900 transition-colors hover:bg-soulup-100"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-8">
          <LinkButton to="/videos" variante="secundaria">
            Ver todos os vídeos
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
