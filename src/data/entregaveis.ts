import type { Entregavel } from "../types";
import imgFrontend from "../assets/pagina2/img-frontend.png";
import imgJava from "../assets/pagina2/img-java.png";
import imgDatabase from "../assets/pagina2/img-database.png";
import imgPython from "../assets/pagina2/img-python.png";
import imgChatbot from "../assets/pagina2/img-chatbot.png";
import imgBusiness from "../assets/pagina2/img-business.png";

// Conteúdo real extraído de paginas/informacao/pagina2.html e videos.html do projeto original.
export const entregaveis: Entregavel[] = [
  {
    id: "front-end",
    materia: "Front-End Design Engineering",
    emoji: "💻",
    titulo: "Site SoulPass",
    imagem: imgFrontend,
    resumo:
      "Site completo da SoulPass migrado para React, Vite, TypeScript, Tailwind CSS e React Router DOM.",
    descricao:
      "Desenvolvemos o site completo da SoulPass, hoje uma SPA em React + Vite + TypeScript com Tailwind CSS e React Router DOM. O projeto conta com as páginas obrigatórias (Home, Integrantes, Sobre, FAQ e Contato), além das páginas de solução, login e cadastro, totalmente responsivas para mobile, tablet e desktop, com identidade visual consistente baseada na paleta de cores da SoulUp.",
    videoId: "AYfEoEeqg_4",
  },
  {
    id: "java",
    materia: "Domain Driven Design Using Java",
    emoji: "☕",
    titulo: "Projeto Java",
    imagem: imgJava,
    resumo:
      "Modelagem orientada a objetos das classes principais da SoulPass com menu interativo no terminal.",
    descricao:
      "Criamos um projeto Java orientado a objetos com as classes principais da SoulPass: Usuário, Conta, Bilhete, ConversorPontos e StatusBilhete. O código segue os padrões de encapsulamento com construtores, getters, setters e métodos específicos da solução. O sistema conta com um menu interativo no terminal que permite cadastrar usuário, vincular bilhete único, fazer postagens para ganhar pontos e converter pontos em crédito de transporte na proporção de 110 pontos por R$1,00.",
    videoId: "UJnWsEjDO7s",
  },
  {
    id: "banco-de-dados",
    materia: "Building Relational Database",
    emoji: "🗄️",
    titulo: "Banco de Dados",
    imagem: imgDatabase,
    resumo:
      "Modelagem conceitual e lógica relacional com 7 tabelas no Oracle Data Modeler.",
    descricao:
      "Fizemos o levantamento de requisitos e a modelagem completa do banco de dados da SoulPass. O trabalho inclui o Modelo Conceitual e o Modelo Lógico Relacional com 7 tabelas: Usuário, Perfil, Postagem, Comentário, Curtida, Pontuação e Resgate. O banco segue as regras de negócio da solução, como a conversão de 110 pontos por R$1,00, bloqueio de CPF duplicado e estorno automático em caso de erro.",
    videoId: "RlZIASnb5-o",
  },
  {
    id: "python",
    materia: "Computational Thinking Using Python",
    emoji: "🐍",
    titulo: "Programa Python",
    imagem: imgPython,
    resumo:
      "Programa com menu no terminal, validação de CPF, QR Code e relatório de CO₂ evitado.",
    descricao:
      "Desenvolvemos um programa em Python com menu no terminal que simula as principais funcionalidades da SoulPass: cadastro de usuário com validação de CPF, login, consulta de pontos, resgate de prêmios e registro de embarques com detecção de comportamento suspeito. O programa gera automaticamente um cartão digital personalizado e um QR Code para cada usuário, salva os dados em JSON e calcula o CO₂ evitado com base nos embarques realizados.",
    videoId: "BkLHKWn6BBo",
  },
  {
    id: "ia-chatbot",
    materia: "Artificial Intelligence & Chatbot",
    emoji: "🤖",
    titulo: "Chatbot Watson",
    imagem: imgChatbot,
    resumo:
      "SoulPassBot integrado ao Telegram via Node-RED, com suporte a texto e áudio.",
    descricao:
      "Construímos o SoulPassBot no Watson Assistant para responder dúvidas sobre a plataforma. O bot foi integrado ao Telegram via Node-RED e suporta tanto texto quanto áudio — mensagens de voz são transcritas pelo Watson Speech to Text e as respostas são devolvidas em áudio pela voz Isabela do Watson Text to Speech, mantendo o contexto da conversa entre mensagens.",
    videoId: "1R1sktU4fd4",
  },
  {
    id: "business",
    materia: "Software Engineering & Business Model",
    emoji: "📊",
    titulo: "Pitch de Negócio",
    imagem: imgBusiness,
    resumo:
      "Business Model Canvas atualizado, backlog do produto e pitch apresentando o novo modelo de recompensas por caminhada.",
    descricao:
      "Documentamos o negócio da SoulPass identificando a oportunidade real: grande parte da população enfrenta dificuldade para adotar hábitos de mobilidade mais ativos e sustentáveis, por falta de incentivo e de benefícios concretos que tornem o transporte público e a caminhada mais atrativos no dia a dia. Nesta versão, o modelo de recompensa foi revisado: em vez de pontos por engajamento na rede social, os usuários agora acumulam pontos com base na distância percorrida a pé (registrada via GPS), podendo depois trocá-los por créditos de transporte público — a cada 110 pontos, R$ 1,00 em crédito. O Business Model Canvas foi atualizado com esse novo fluxo, o backlog do produto foi detalhado por épicos no Trello, e o pitch apresenta o problema, a solução revisada e os diferenciais com a voz dos próprios integrantes.",
    videoId: "8AIbNRM5C5Q",
    linksExtras: [
      { label: "Business Model Canvas (novo)", url: "https://canva.link/5x0b68xqa93ix9d" },
      { label: "Business Model Canvas (versão anterior)", url: "https://canva.link/633e2yi8m8l4c91" },
      { label: "Backlog do produto (Trello)", url: "https://trello.com/b/2H3SFGux/soulpass-backlog" },
      {
        label: "Diagrama de Casos de Uso",
        url: "https://drive.google.com/drive/folders/1Fo0iIQ6Euz5PiY2SBVgrs6x1t-wnwI7Z",
      },
      {
        label: "Diagrama de Atividade (Figma)",
        url: "https://www.figma.com/board/qf4quAaE7DtHxI4N9hzCY7/Sem-t%C3%ADtulo?t=3wUBI9SzNmDHRHoH-1",
      },
      {
        label: "Protótipo de Fidelidade (Figma)",
        url: "https://www.figma.com/site/0cQyRoIL1mQcZd8ziV5CTK/Sem-t%C3%ADtulo?node-id=10-5&t=qYRP5q0e9Rnxyw2T-1",
      },
    ],
  },
];
