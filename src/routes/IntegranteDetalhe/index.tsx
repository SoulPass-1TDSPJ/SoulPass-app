import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { integrantes } from "../../data/integrantes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import iconeLinkedin from "../../assets/icones/linkedin.png";
import iconeGithub from "../../assets/icones/github.png";

/**
 * Rota dinâmica /integrantes/:id — lê o parâmetro com useParams e busca
 * o integrante correspondente. Se o id não existir, redireciona de volta
 * para a listagem com useNavigate (ex.: link quebrado ou id digitado à mão).
 */
export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pessoa = integrantes.find((item) => item.id === id);

  useDocumentTitle(pessoa ? pessoa.nome : "Integrante não encontrado");

  useEffect(() => {
    if (!pessoa) {
      const timer = setTimeout(() => navigate("/integrantes", { replace: true }), 2500);
      return () => clearTimeout(timer);
    }
  }, [pessoa, navigate]);

  if (!pessoa) {
    return (
      <section className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-soulup-900">Integrante não encontrado</h1>
        <p className="mt-3 text-soulup-900/70">
          Não encontramos ninguém com esse identificador. Você será
          redirecionado para a lista de integrantes.
        </p>
        <Link
          to="/integrantes"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-soulup-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Voltar agora
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 tablet:py-24">
      <Link to="/integrantes" className="text-sm font-semibold text-soulup-700 hover:underline">
        ← Voltar para integrantes
      </Link>

      <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-soulup-100 bg-white p-8 text-center shadow-sm shadow-soulup-900/5 tablet:flex-row tablet:text-left">
        <img
          src={pessoa.foto}
          alt={pessoa.nome}
          className="h-32 w-32 flex-none rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-soulup-900">{pessoa.nome}</h1>
          <p className="mt-1 text-sm text-soulup-900/60">RM: {pessoa.rm}</p>
          <p className="mt-4 text-soulup-900/80">{pessoa.bio}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 tablet:justify-start">
            <a
              href={pessoa.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004182]"
            >
              <img src={iconeLinkedin} alt="" className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={pessoa.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#171515] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              <img src={iconeGithub} alt="" className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
