import { useState } from "react";
import { useForm } from "react-hook-form";
import { PageHero } from "../../components/PageHero";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { enviarContato } from "../../services/contatoService";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { ContatoFormValues, FormStatus } from "../../types";
import imgPhones from "../../assets/hero/img-phones.png";

const inputClasses =
  "w-full rounded-xl border border-soulup-100 bg-white px-4 py-3 text-sm text-soulup-900 outline-none transition-colors placeholder:text-soulup-900/40 focus:border-soulup-500";

/**
 * Página de contato — migrada de paginas/informacao/contato.html.
 * Validação, mensagens de erro e envio agora usam React Hook Form,
 * substituindo a validação manual de js/contato.js.
 */
export default function Contato() {
  useDocumentTitle("Contato");
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormValues>({ mode: "onBlur" });

  async function onSubmit(dados: ContatoFormValues) {
    try {
      await enviarContato(dados);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero titulo="Entre em contato" imagem={imgPhones} imagemAlt="Celulares com a interface do SoulPass">
        <p>Dúvida, problema com pontos ou uma sugestão? Estamos aqui para ouvir.</p>
        <p>
          Preencha o formulário e nossa equipe responde em até 2 dias úteis —
          nada cai no vazio por aqui.
        </p>
      </PageHero>

      <section className="mx-auto max-w-2xl px-6 py-14 tablet:py-20">
        <div className="rounded-2xl border border-soulup-100 bg-white p-6 shadow-sm shadow-soulup-900/5 xs:p-8">
          <h2 className="text-xl font-bold text-soulup-900">Mande sua mensagem</h2>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormField label="Nome completo" htmlFor="nome" erro={errors.nome?.message}>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                className={inputClasses}
                aria-invalid={Boolean(errors.nome)}
                {...register("nome", {
                  required: "Informe seu nome completo.",
                  minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres." },
                  maxLength: { value: 100, message: "O nome deve ter no máximo 100 caracteres." },
                })}
              />
            </FormField>

            <FormField label="E-mail" htmlFor="email" erro={errors.email?.message}>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className={inputClasses}
                aria-invalid={Boolean(errors.email)}
                {...register("email", {
                  required: "Informe um e-mail para retorno.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Digite um e-mail válido.",
                  },
                })}
              />
            </FormField>

            <FormField label="Assunto" htmlFor="assunto" erro={errors.assunto?.message}>
              <select
                id="assunto"
                className={inputClasses}
                defaultValue=""
                aria-invalid={Boolean(errors.assunto)}
                {...register("assunto", { required: "Selecione um assunto." })}
              >
                <option value="" disabled>
                  Selecione um assunto
                </option>
                <option value="duvida">Dúvida sobre a plataforma</option>
                <option value="pontos">Problema com pontos</option>
                <option value="creditos">Problema com créditos</option>
                <option value="parceria">Proposta de parceria</option>
                <option value="outro">Outro</option>
              </select>
            </FormField>

            <FormField label="Mensagem" htmlFor="mensagem" erro={errors.mensagem?.message}>
              <textarea
                id="mensagem"
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className={`${inputClasses} resize-none`}
                aria-invalid={Boolean(errors.mensagem)}
                {...register("mensagem", {
                  required: "Escreva uma mensagem antes de enviar.",
                  minLength: { value: 10, message: "Conte um pouco mais — mínimo de 10 caracteres." },
                })}
              />
            </FormField>

            <div>
              <label className="flex items-start gap-2 text-sm text-soulup-900/80">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-soulup-500 text-soulup-500 focus:ring-soulup-500"
                  {...register("termos", {
                    required: "É necessário aceitar os termos para enviar.",
                  })}
                />
                Li e concordo com os termos de uso e política de privacidade
              </label>
              {errors.termos ? (
                <span role="alert" className="mt-1 block text-xs font-medium text-red-600">
                  {errors.termos.message}
                </span>
              ) : null}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </Button>

            {status === "success" ? (
              <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                ✅ Mensagem enviada com sucesso! Retornaremos em até 2 dias úteis.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Não foi possível enviar sua mensagem agora. Tente novamente em instantes.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
