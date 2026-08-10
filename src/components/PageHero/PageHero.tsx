import type { ReactNode } from "react";

interface PageHeroProps {
  titulo: ReactNode;
  children?: ReactNode;
  imagem?: string;
  imagemAlt?: string;
  acoes?: ReactNode;
}

/**
 * Seção hero reutilizada no topo de todas as páginas de conteúdo.
 * Recebe título, texto de apoio, imagem ilustrativa e ações via props —
 * exemplo central de composição/props entre componentes no projeto.
 */
export default function PageHero({
  titulo,
  children,
  imagem,
  imagemAlt = "",
  acoes,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soulup-900/90 via-soulup-700/80 to-soulup-500/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 tablet:grid-cols-[1.1fr_0.9fr] tablet:py-20">
        <div className="max-w-xl tablet:self-center">
          <h1 className="text-3xl font-bold leading-tight text-white xs:text-4xl desktop:text-5xl">
            {titulo}
          </h1>
          <div className="mt-4 space-y-3 text-base text-white/85">{children}</div>
          {acoes ? <div className="mt-6 flex flex-wrap gap-3">{acoes}</div> : null}
        </div>
        {imagem ? (
          <div className="relative mx-auto -mb-14 w-full max-w-md self-end tablet:-mb-20 tablet:max-w-none">
            <img
              src={imagem}
              alt={imagemAlt}
              className="mx-auto block max-h-[22rem] w-auto xs:max-h-[26rem] desktop:max-h-[32rem]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
