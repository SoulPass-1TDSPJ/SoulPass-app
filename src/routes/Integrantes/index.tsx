import { Link } from "react-router";
import { PageHero } from "../../components/PageHero";
import { Card } from "../../components/Card";
import { integrantes } from "../../data/integrantes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import onibusPass from "../../assets/hero/onibus-pass.png";

/**
 * Lista dos integrantes — migrada de paginas/informacao/integrantes.html.
 * Cada card leva para a rota dinâmica /integrantes/:id com mais detalhes,
 * usando dados passados via props para o Card e navegação por Link.
 */
export default function Integrantes() {
  useDocumentTitle("Integrantes");

  return (
    <>
      <PageHero
        titulo={<>Os criadores da <em className="not-italic text-soulup-500">SoulPass</em></>}
        imagem={onibusPass}
        imagemAlt="Logo SoulPass"
      >
        <p>
          Somos uma equipe formada por jovens apaixonados por tecnologia,
          inovação e impacto social.
        </p>
        <p>
          A SoulPass surgiu da vontade de criar uma solução que conectasse o
          mundo digital com problemas reais do dia a dia, como mobilidade
          urbana, acessibilidade e qualidade de vida.
        </p>
        <p>Estudantes de Análise e Desenvolvimento de Sistemas — FIAP</p>
        <p>Turma 1TDSPJ · Challenge 2026 · 2º Semestre</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-14 tablet:py-20">
        <div className="grid gap-6 xs:grid-cols-2 desktop:grid-cols-3">
          {integrantes.map((pessoa) => (
            <Card key={pessoa.id} className="flex flex-col items-center text-center">
              <img
                src={pessoa.foto}
                alt={pessoa.nome}
                className="h-28 w-28 rounded-full object-cover"
              />
              <h2 className="mt-4 text-lg font-bold text-soulup-900">{pessoa.nome}</h2>
              <p className="text-sm text-soulup-900/60">RM: {pessoa.rm}</p>
              <Link
                to={`/integrantes/${pessoa.id}`}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-soulup-500 px-5 py-2 text-sm font-semibold text-soulup-700 transition-colors hover:bg-soulup-100"
              >
                Ver perfil
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
