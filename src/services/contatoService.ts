import type { ContatoFormValues } from "../types";

/**
 * Serviço responsável por "enviar" o formulário de contato.
 * Não há back-end real neste projeto de front-end, então a chamada é
 * simulada com uma Promise + atraso artificial (sem uso de axios,
 * conforme exigido pela Sprint 3). Em um cenário real, aqui entraria
 * um fetch para a API da SoulPass.
 */
export async function enviarContato(dados: ContatoFormValues): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.info("[contatoService] mensagem recebida:", dados);
  return { ok: true };
}
