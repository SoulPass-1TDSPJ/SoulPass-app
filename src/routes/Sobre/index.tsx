import { PageHero } from "../../components/PageHero";
import { LinkButton } from "../../components/Button";
import { Card } from "../../components/Card";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import onibusPass from "../../assets/hero/onibus-pass.png";
import imgMulherOnibus from "../../assets/sobre/img-mulheOnibus.jpg";
import imgOportunidade from "../../assets/sobre/img-oportunidade.png";
import imgSolucao from "../../assets/sobre/img-solucao.png";

const cardsPilares = [
  {
    emoji: "🎯",
    titulo: "Objetivo",
    texto:
      "Conectar o mundo digital com benefícios reais no transporte público, promovendo sustentabilidade e inclusão social.",
  },
  {
    emoji: "👥",
    titulo: "Público-alvo",
    texto:
      "Usuários da SoulUp que utilizam transporte público diariamente e querem usar seus pontos de forma prática.",
  },
  {
    emoji: "🌱",
    titulo: "Sustentabilidade",
    texto:
      "Incentivar o uso do transporte coletivo reduz emissões de carbono e contribui para cidades mais sustentáveis.",
  },
  {
    emoji: "🔒",
    titulo: "Segurança",
    texto:
      "Sistema com autenticação segura, proteção de dados seguindo a LGPD e controle total sobre suas conversões.",
  },
];

const tecnologias = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Java",
  "Python",
  "Oracle DB",
  "Watson Assistant",
  "Node-RED",
];

const roadmap = [
  {
    titulo: "Concepção e planejamento",
    texto: "Definição do problema, solução e modelagem inicial do banco de dados.",
  },
  {
    titulo: "Desenvolvimento do front-end",
    texto:
      "Criação do site completo, hoje migrado para React com Tailwind CSS e totalmente responsivo.",
  },
  {
    titulo: "Integração com back-end",
    texto: "Desenvolvimento da API em Java e integração com o banco Oracle.",
  },
  {
    titulo: "Integração com SPTrans",
    texto: "Parceria oficial e integração real com o sistema de bilhetagem de São Paulo.",
  },
];

/** Página "Sobre" — migrada de paginas/informacao/sobre.html. */
export default function Sobre() {
  useDocumentTitle("Sobre");

  return (
    <>
      <PageHero
        titulo={<>Sobre a <em className="not-italic text-soulup-500">SoulPass</em></>}
        imagem={onibusPass}
        imagemAlt="Ônibus SoulPass"
        acoes={<LinkButton to="/solucao">Ver solução completa</LinkButton>}
      >
        <p>
          Transformando cada passo caminhado em mobilidade urbana real.
          Conheça o problema que nos motivou, a solução que criamos e o
          impacto que queremos gerar.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-14 tablet:py-20">
        <div className="grid items-center gap-8 tablet:grid-cols-2">
          <img
            src={imgMulherOnibus}
            alt="Transporte público"
            className="h-72 w-full rounded-2xl object-cover tablet:h-96"
          />
          <div>
            <h2 className="text-2xl font-bold text-soulup-900">O contexto e o problema</h2>
            <p className="mt-3 text-soulup-900/80">
              Grande parte da população enfrenta dificuldade para adotar
              hábitos de mobilidade mais ativos e sustentáveis — seja pela
              falta de incentivo, seja pela ausência de benefícios concretos
              que tornem o transporte público e a caminhada opções mais
              atrativas no dia a dia.
            </p>
            <p className="mt-3 text-soulup-900/80">
              O baixo estímulo para caminhar, o custo frequente do transporte
              público e a consequente dependência de veículos particulares —
              mesmo em trajetos curtos — agravam impactos ambientais e
              urbanos, como poluição e trânsito, evidenciando a ausência de
              uma recompensa prática que reforce positivamente esses hábitos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soulup-100/60 py-14 tablet:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 tablet:grid-cols-2">
          <div className="tablet:order-2">
            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-3xl bg-gradient-to-br from-soulup-900 via-soulup-700 to-soulup-500 p-9 shadow-lg tablet:h-72 tablet:w-72">
              <img
                src={imgOportunidade}
                alt="Oportunidade de mercado"
                className="h-full w-full object-contain drop-shadow"
              />
            </div>
          </div>
          <div className="tablet:order-1">
            <h2 className="text-2xl font-bold text-soulup-900">
              Como funciona a recompensa
            </h2>
            <p className="mt-3 text-soulup-900/80">
              O usuário registra suas caminhadas pelo aplicativo, que
              contabiliza a distância percorrida via GPS. A cada 2 km
              percorridos, ganha 40 pontos, podendo acumular até 120 pontos
              por dia ao completar 6 km (2 km + 4 km + 6 km).
            </p>
            <p className="mt-3 text-soulup-900/80">
              Os pontos acumulados podem ser convertidos em créditos de
              transporte público, na proporção de 110 pontos = R$ 1,00. O
              valor de uma passagem (R$ 5,50) equivale a 605 pontos,
              alcançáveis em aproximadamente 5 dias de uso contínuo no ritmo
              máximo diário — com o custo dos créditos subsidiado pela
              SoulUp, sem ônus direto ao usuário.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 tablet:py-20">
        <div className="grid items-center gap-8 tablet:grid-cols-2">
          <img
            src={imgSolucao}
            alt="Solução SoulPass"
            className="h-72 w-full rounded-2xl object-contain tablet:h-96"
          />
          <div>
            <h2 className="text-2xl font-bold text-soulup-900">Nossa solução</h2>
            <p className="mt-3 text-soulup-900/80">
              A SoulPass é um sistema de recompensas integrado à SoulUp, no
              qual os usuários acumulam pontos de acordo com a distância
              percorrida a pé e podem trocá-los por créditos de transporte
              público — incentivando a mobilidade ativa e sustentável com uma
              recompensa concreta para quem incorpora a caminhada à rotina.
            </p>
            <p className="mt-3 text-soulup-900/80">
              A integração acontece em parceria com a SPTrans, garantindo que
              o processo seja seguro, rápido e acessível para todos os
              usuários da rede municipal de ônibus de São Paulo.
            </p>
            <a
              href="https://youtu.be/8AIbNRM5C5Q"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-soulup-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-soulup-700"
            >
              Ver pitch
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 tablet:pb-20">
        <div className="grid gap-5 xs:grid-cols-2 desktop:grid-cols-4">
          {cardsPilares.map((card) => (
            <Card key={card.titulo} className="text-center">
              <span className="text-3xl" aria-hidden="true">
                {card.emoji}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-soulup-900">{card.titulo}</h3>
              <p className="mt-2 text-sm text-soulup-900/75">{card.texto}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 text-center tablet:pb-20">
        <h2 className="text-2xl font-bold text-soulup-900">Tecnologias utilizadas</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-soulup-900 px-4 py-2 text-sm font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 tablet:pb-24">
        <h2 className="text-center text-2xl font-bold text-soulup-900">Roadmap</h2>
        <ol className="mt-8 space-y-6">
          {roadmap.map((etapa, indice) => (
            <li key={etapa.titulo} className="flex gap-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-soulup-500 font-bold text-white">
                {indice + 1}
              </span>
              <div>
                <h3 className="font-semibold text-soulup-900">{etapa.titulo}</h3>
                <p className="text-sm text-soulup-900/75">{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
