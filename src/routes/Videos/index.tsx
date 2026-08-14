import { PageHero } from "../../components/PageHero";
import { LinkButton } from "../../components/Button";
import { entregaveis } from "../../data/entregaveis";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import imgVideo from "../../assets/hero/img-video.png";

/** Página de vídeos — migrada de paginas/informacao/videos.html. */
export default function Videos() {
  useDocumentTitle("Vídeos");

  return (
    <>
      <PageHero
        titulo={<>Vídeos dos <em className="not-italic text-soulup-500">Entregáveis</em></>}
        imagem={imgVideo}
        imagemAlt="Ônibus SoulPass"
        acoes={<LinkButton to="/solucao">O que fizemos</LinkButton>}
      >
        <p>Assista às apresentações de cada disciplina do Challenge FIAP.</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-14 tablet:py-20">
        <div className="grid gap-8 tablet:grid-cols-2">
          {entregaveis.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-soulup-100 bg-white p-5 shadow-sm shadow-soulup-900/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-soulup-500">
                {item.emoji} {item.materia}
              </p>
              <h2 className="mt-1 text-lg font-bold text-soulup-900">{item.titulo}</h2>
              <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm text-soulup-900/75">{item.resumo}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
