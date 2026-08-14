import { PageHero } from "../../components/PageHero";
import { LinkButton } from "../../components/Button";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import girlBanner from "../../assets/hero/girl-banner.png";
import soulupIcon from "../../assets/misc/soulpass.jpg";
import soulPassIcon from "../../assets/hero/onibus-pass.png";

/**
 * Página inicial — migrada de index.html, preservando o conteúdo e a
 * estrutura de duas seções de apresentação (SoulUp / SoulPass).
 */
export default function Home() {
  useDocumentTitle("Seus pontos viram passagem");

  return (
    <>
      <PageHero
        titulo="Bem-vindo ao SoulPass!"
        imagem={girlBanner}
        imagemAlt="Garota sorrindo enquanto usa o celular"
        acoes={
          <LinkButton to="/login">Login</LinkButton>
        }
      >
        <p>
          A nossa equipe construiu esse sistema para te ajudar a navegar nesse
          mundo, e sem precisar se preocupar com dinheiro. A SoulPass é um
          sistema integrado à SoulUp, rede social conhecida após o dono,
          Fabiano Miranda, participar do Shark Tank Brasil.
        </p>
        <p>Para desfrutar das maravilhas da SoulPass, faça o login:</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-14 tablet:py-20">
        <div className="grid items-center gap-8 tablet:grid-cols-2">
          <img
            src={soulupIcon}
            alt="Logo da SoulUp"
            className="mx-auto h-40 w-40 rounded-3xl object-cover shadow-md tablet:h-56 tablet:w-56"
          />
          <div>
            <h2 className="text-2xl font-bold text-soulup-900">
              Quer conhecer mais dos projetos da SoulUp?
            </h2>
            <p className="mt-3 text-soulup-900/80">
              Conheça mais desse incrível projeto no site da SoulUp. Um app
              inovador e sustentável que conecta pessoas e promove a troca de
              pontos ganhos in-app. Esses pontos podem ser utilizados tanto
              para pagar sua conta de luz, quanto para fazer uma renda extra.
            </p>
            <a
              href="https://soulup.io/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-soulup-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-soulup-700"
            >
              Acessar SoulUp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-soulup-100/60 py-14 tablet:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 tablet:grid-cols-2">
          <div className="tablet:order-2">
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-soulup-900 via-soulup-700 to-soulup-500 p-9 shadow-lg tablet:h-64 tablet:w-64">
              <img
                src={soulPassIcon}
                alt="Ícone da SoulPass — ônibus com a palavra PASS"
                className="h-full w-full object-contain drop-shadow"
              />
            </div>
          </div>
          <div className="tablet:order-1">
            <h2 className="text-2xl font-bold text-soulup-900">
              O que é a SoulPass?
            </h2>
            <p className="mt-3 text-soulup-900/80">
              A SoulPass é uma solução inovadora que permite aos usuários
              trocar seus pontos pelo benefício de poder andar de transporte
              público sem se preocupar com o custo financeiro. Os pontos são
              ganhos caminhando — o app registra a distância percorrida a pé
              e converte isso em créditos válidos para o bilhete único.
            </p>
            <p className="mt-3 text-soulup-900/80">
              Temos parceiros estratégicos que apoiam nossa missão de criar um
              futuro mais sustentável e inclusivo. Exemplo é a própria
              SPTrans, que irá integrar sua rede de transporte com a
              SoulPass, e permitir essa conversão.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
