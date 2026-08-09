import type { FaqItem } from "../types";

// Conteúdo real extraído de paginas/informacao/faq.html do projeto original.
export const faqItems: FaqItem[] = [
  {
    id: "o-que-e",
    pergunta: "O que é a SoulPass?",
    resposta:
      "A SoulPass é uma plataforma integrada à SoulUp que permite converter os pontos acumulados no app em créditos para o bilhete único do transporte público. O objetivo é tornar a mobilidade urbana mais acessível para todos.",
  },
  {
    id: "pontos-soulup",
    pergunta: "O que são os pontos da SoulUp?",
    resposta:
      "Os pontos são a moeda virtual da SoulUp. Na SoulPass, você os acumula caminhando: o app registra a distância percorrida a pé via GPS e converte isso em pontos automaticamente — sem precisar publicar nada ou interagir com a comunidade. Eles podem depois ser convertidos em créditos de transporte público.",
  },
  {
    id: "quantos-pontos-caminhando",
    pergunta: "Quantos pontos eu ganho caminhando?",
    resposta:
      "A cada 2 km percorridos você ganha 40 pontos, até um limite de 120 pontos por dia ao completar 6 km. No ritmo máximo diário, dá pra acumular o suficiente para uma passagem completa (605 pontos) em cerca de 5 dias.",
  },
  {
    id: "resgatar-creditos",
    pergunta: "Como resgato créditos de transporte?",
    resposta:
      'É simples: faça login na SoulPass com sua conta SoulUp, acesse a opção "Resgatar créditos", escolha a quantidade de pontos que deseja converter e confirme. Os créditos são aplicados automaticamente no seu bilhete único cadastrado em até 24 horas.',
  },
  {
    id: "taxa-conversao",
    pergunta: "Qual é a taxa de conversão de pontos para créditos?",
    resposta:
      "A taxa é de 110 pontos SoulUp para R$ 1,00 em crédito de transporte. Uma passagem (R$ 5,50) equivale a 605 pontos. O custo dos créditos é subsidiado pela SoulUp, sem nenhum ônus direto para você.",
  },
  {
    id: "seguranca",
    pergunta: "A SoulPass é segura? Meus dados estão protegidos?",
    resposta:
      "Sim. A SoulPass utiliza criptografia para proteger seus dados pessoais e financeiros. Não armazenamos dados do cartão de crédito e toda comunicação com a SPTrans é feita por canais seguros. Seguimos as diretrizes da LGPD (Lei Geral de Proteção de Dados).",
  },
  {
    id: "cidades",
    pergunta: "Em quais cidades a SoulPass funciona?",
    resposta:
      "Atualmente a SoulPass está em fase de lançamento em São Paulo, com integração à rede SPTrans. Planejamos expandir para outras capitais brasileiras ao longo de 2026 e 2027. Acompanhe nossas redes sociais para saber quando chegamos na sua cidade.",
  },
  {
    id: "conta-soulup",
    pergunta: "Preciso ter uma conta SoulUp para usar a SoulPass?",
    resposta:
      "Sim. Como a SoulPass usa os pontos gerados pela SoulUp, é necessário ter uma conta ativa na plataforma. O cadastro é gratuito e pode ser feito diretamente pelo site da SoulUp.",
  },
  {
    id: "validade-pontos",
    pergunta: "Os pontos têm prazo de validade?",
    resposta:
      "Não. Seus pontos não possuem prazo de validade e podem ser utilizados a qualquer momento.",
  },
];
