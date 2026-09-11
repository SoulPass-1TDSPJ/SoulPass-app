# 🚌 SoulPass — Front-End (Sprint 3)

Aplicação **React + Vite + TypeScript** que converte o site estático da SoulPass (HTML/CSS/JS puro, Sprints 1 e 2) em uma **Single Page Application** completa, seguindo os critérios de avaliação da Sprint 3 de Front-End Design Engineering — FIAP.

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/SoulPass-1TDSPJ/soulpass_front.git)](https://github.com/SoulPass-1TDSPJ/soulpass_front.git)

---

## ✨ Sobre o projeto

A SoulPass é um sistema integrado à SoulUp (rede social fictícia do desafio FIAP) que permite converter pontos ganhos por engajamento no app em **créditos para o bilhete único** do transporte público de São Paulo, em parceria com a SPTrans. A proposta reduz o custo do transporte para o usuário e incentiva o uso do transporte coletivo, diminuindo a pegada de carbono.

Este repositório contém **apenas o front-end**, agora reescrito como SPA React, mantendo todo o conteúdo, a identidade visual e as páginas do projeto original.

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|---|---|
| Build tool | [Vite](https://vite.dev/) |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev/) |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com/) |
| Roteamento | [React Router](https://reactrouter.com/) (Data Router — `createBrowserRouter` + `RouterProvider`) |
| Formulários | [React Hook Form](https://react-hook-form.com/) |

Sem Bootstrap, Material UI, Chakra UI, axios ou templates prontos — apenas React + Vite e as libs acima.

---

## 📁 Estrutura de pastas

```
soulpass-app/
├── public/
│   └── favicon.jpg
├── src/
│   ├── assets/              # imagens (hero, avatares, ícones, sobre, entregáveis)
│   ├── components/
│   │   ├── Header/          # cabeçalho fixo (logo + Navbar)
│   │   ├── Navbar/          # navegação principal (useState para menu mobile)
│   │   ├── Footer/          # rodapé com links externos
│   │   ├── Layout/          # rota-pai com <Outlet /> (useScrollToTop, useWatsonAssistant)
│   │   ├── Button/          # Button (ações) e LinkButton (navegação)
│   │   ├── Card/             # card genérico reutilizável
│   │   ├── PageHero/         # hero reutilizado no topo de cada página (props)
│   │   ├── Accordion/        # item de FAQ com useState próprio
│   │   └── FormField/        # wrapper label + input + erro para os forms
│   ├── routes/                # cada pasta é uma rota, um único index.tsx cada
│   │   ├── Home/
│   │   ├── Sobre/
│   │   ├── Faq/
│   │   ├── Contato/          # React Hook Form
│   │   ├── Integrantes/
│   │   ├── IntegranteDetalhe/  # rota dinâmica /integrantes/:id
│   │   ├── Solucao/
│   │   ├── EntregavelDetalhe/  # rota dinâmica /solucao/:id
│   │   ├── Videos/
│   │   ├── Login/            # React Hook Form + useNavigate
│   │   ├── Cadastro/         # React Hook Form + useNavigate
│   │   └── NotFound/         # 404 (rota "*" e errorElement)
│   ├── data/                 # integrantes.ts, faq.ts, entregaveis.ts, navigation.ts
│   ├── hooks/                # useDocumentTitle, useScrollToTop, useWatsonAssistant
│   ├── types/                # tipos TypeScript do domínio
│   ├── services/             # contatoService.ts, authService.ts (sem axios)
│   ├── main.tsx                # cria o router (createBrowserRouter) e renderiza <RouterProvider />
│   └── index.css               # tema Tailwind (paleta SoulPass + breakpoints)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧭 Páginas e rotas

| Rota | Página | Tipo |
|---|---|---|
| `/` | Home | estática |
| `/sobre` | Sobre o projeto | estática |
| `/faq` | Perguntas frequentes | estática |
| `/contato` | Formulário de contato | estática |
| `/integrantes` | Lista de integrantes | estática |
| `/integrantes/:id` | Perfil de um integrante | **dinâmica** |
| `/solucao` | Solução do projeto / entregáveis | estática |
| `/solucao/:id` | Detalhe de um entregável (com vídeo) | **dinâmica** |
| `/videos` | Todos os vídeos das disciplinas | estática |
| `/login` | Login | estática |
| `/cadastro` | Cadastro de usuário | estática |
| `*` | Página não encontrada (404) | coringa |

---

## ⚛️ Conceitos React aplicados

- **useState** — `Navbar` (menu mobile), `AccordionItem` (abrir/fechar FAQ), `Contato`/`Login`/`Cadastro` (status de envio).
- **useEffect** — `useDocumentTitle` (atualiza `<title>` a cada rota), `IntegranteDetalhe` (redirecionamento automático quando o id não existe) e `useWatsonAssistant` (carrega o widget do chatbot uma única vez).
- **useNavigate** — `Login` e `Cadastro` redirecionam após sucesso; `IntegranteDetalhe` redireciona em caso de id inválido.
- **useParams** — `IntegranteDetalhe` (`/integrantes/:id`) e `EntregavelDetalhe` (`/solucao/:id`).
- **Props entre componentes** — `PageHero`, `Card`, `FormField`, `Button`/`LinkButton` recebem conteúdo e configuração via props em todas as páginas.
- **Rotas estáticas e dinâmicas** — definidas em `src/main.tsx`, como array de objetos (`createBrowserRouter`), com o elemento de cada rota importado diretamente de `src/routes/<Nome>`.

---

## 📝 Formulários (React Hook Form)

- **Contato** (`/contato`): nome, e-mail, assunto, mensagem e aceite dos termos, todos com `register`, validação (`required`, `minLength`, `maxLength`, `pattern`) e mensagens de erro amigáveis tipadas via `ContatoFormValues`.
- **Login** (`/login`): e-mail e senha, com validação e feedback de credenciais inválidas.
- **Cadastro** (`/cadastro`): nome, e-mail, senha e confirmação de senha (validação cruzada com `watch`), redirecionando para o login ao concluir.

---

## 📱 Responsividade

Breakpoints customizados no tema do Tailwind (`src/index.css`), conforme exigido pela Sprint 3:

- **Mobile**: até `480px` (`xs`)
- **Tablet**: `768px` (`tablet:`)
- **Desktop**: `992px+` (`desktop:`)

Todas as páginas usam grid/flex responsivos (`grid-cols-1` → `tablet:grid-cols-2` → `desktop:grid-cols-3/4`) e o menu de navegação colapsa para um menu hambúrguer abaixo do breakpoint `tablet`.

---

## 🤖 Chatbot (Watson Assistant)

O widget do SoulPassBot (desenvolvido na disciplina de AI & Chatbot) é carregado pelo hook `src/hooks/useWatsonAssistant.ts`, chamado uma única vez em `Layout.tsx` (a rota-pai que envolve todas as páginas). Ele injeta o script oficial do Watson Assistant dentro do ciclo de vida do React — sem nenhum `<script>` inline no `index.html` — com uma checagem por id para não duplicar o widget.

---

## ▶️ Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e npm.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção (gera a pasta dist/)
npm run build

# pré-visualizar o build de produção (http://localhost:4173)
npm run preview
```

---

## 👥 Integrantes

| Nome | RM | GitHub | LinkedIn |
|---|---|---|---|
| João Vitor Cruz de Lima | 571277 | [@JoaoVitor-2209](https://github.com/JoaoVitor-2209) | [perfil](https://www.linkedin.com/in/jo%C3%A3o-vitor-cruz-de-lima-ba4862219) |
| Matheus Ferreira Antônio | 570933 | [@matheusfa08](https://github.com/matheusfa08) | [perfil](https://www.linkedin.com/in/matheus-ferreira-ant%C3%B4nio-592138365) |
| Sophia Silveira dos Santos | 571932 | [@SophiaS4nt](https://github.com/SophiaS4nt) | [perfil](https://www.linkedin.com/in/sophia-silveira-9325493a1) |
| Renato da Silva Tenorio | 572928 | [@EUGP2](https://github.com/EUGP2) | [perfil](https://www.linkedin.com/in/renato-silvagp) |
| Renato Ruiz Ferreira Fonseca Scolamieri | 568667 | [@Renatoruiz1](https://github.com/Renatoruiz1) | [perfil](https://www.linkedin.com/in/renato-ruiz-ferreira-fonseca-scolamieri-32698840b) |

Turma **1TDSPJ** · FIAP · Análise e Desenvolvimento de Sistemas.

---

## 🔗 GitHub do projeto

[github.com/SoulPass-1TDSPJ/SoulPass-app](https://github.com/SoulPass-1TDSPJ/SoulPass-app.git)

## 🎥 Vídeo de demonstração

[https://youtu.be/8AIbNRM5C5Q]

