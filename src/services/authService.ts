import type { CadastroFormValues, LoginFormValues } from "../types";

/**
 * Serviço simulado de autenticação. Como o projeto não possui back-end,
 * as credenciais são "persistidas" no localStorage apenas para permitir
 * demonstrar o fluxo de cadastro -> login -> redirecionamento (useNavigate).
 */
const STORAGE_KEY = "soulpass:usuarios";

interface UsuarioSalvo {
  nome: string;
  email: string;
  senha: string;
}

function lerUsuarios(): UsuarioSalvo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UsuarioSalvo[]) : [];
  } catch {
    return [];
  }
}

export async function cadastrarUsuario(dados: CadastroFormValues): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const usuarios = lerUsuarios();
  usuarios.push({ nome: dados.nome, email: dados.email, senha: dados.senha });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  return { ok: true };
}

export async function autenticarUsuario(
  dados: LoginFormValues,
): Promise<{ ok: boolean; nome?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const usuarios = lerUsuarios();
  const encontrado = usuarios.find(
    (u) => u.email === dados.email && u.senha === dados.senha,
  );
  return encontrado ? { ok: true, nome: encontrado.nome } : { ok: false };
}
