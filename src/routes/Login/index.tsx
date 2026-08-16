import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { PageHero } from "../../components/PageHero";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { autenticarUsuario } from "../../services/authService";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { LoginFormValues } from "../../types";
import imgLogin from "../../assets/hero/img-login.png";

const inputClasses =
  "w-full rounded-xl border border-soulup-100 bg-white px-4 py-3 text-sm text-soulup-900 outline-none transition-colors placeholder:text-soulup-900/40 focus:border-soulup-500";

/**
 * Página de login — migrada de paginas/login/login.html.
 * Após autenticação bem-sucedida, redireciona para a Home com useNavigate.
 */
export default function Login() {
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const [erroLogin, setErroLogin] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ mode: "onBlur" });

  async function onSubmit(dados: LoginFormValues) {
    setErroLogin("");
    const resultado = await autenticarUsuario(dados);
    if (resultado.ok) {
      navigate("/", { replace: true });
    } else {
      setErroLogin("E-mail ou senha incorretos. Verifique seus dados ou cadastre-se.");
    }
  }

  return (
    <>
      <PageHero
        titulo={<>Acesse a <em className="not-italic text-soulup-500">SoulPass</em></>}
        imagem={imgLogin}
        imagemAlt="Login"
      >
        <p>Entre com seu e-mail e senha para acessar seus pontos e créditos de transporte.</p>
      </PageHero>

      <section className="mx-auto max-w-md px-6 py-14 tablet:py-20">
        <div className="rounded-2xl border border-soulup-100 bg-white p-6 shadow-sm shadow-soulup-900/5 xs:p-8">
          <h2 className="text-xl font-bold text-soulup-900">Entrar</h2>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormField label="E-mail" htmlFor="email" erro={errors.email?.message}>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className={inputClasses}
                aria-invalid={Boolean(errors.email)}
                {...register("email", {
                  required: "Informe seu e-mail.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Digite um e-mail válido.",
                  },
                })}
              />
            </FormField>

            <FormField label="Senha" htmlFor="senha" erro={errors.senha?.message}>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className={inputClasses}
                aria-invalid={Boolean(errors.senha)}
                {...register("senha", {
                  required: "Informe sua senha.",
                  minLength: { value: 5, message: "A senha deve ter pelo menos 5 caracteres." },
                })}
              />
            </FormField>

            {erroLogin ? (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {erroLogin}
              </p>
            ) : null}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-soulup-900/70">
            Ainda não tem conta?{" "}
            <Link to="/cadastro" className="font-semibold text-soulup-700 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
