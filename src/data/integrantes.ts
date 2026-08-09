import type { Integrante } from "../types";
import fotoJoao from "../assets/avatar/img-joao.jpg";
import fotoMatheus from "../assets/avatar/img-matheus.jpg";
import fotoSophia from "../assets/avatar/img-sophia.jpg";
import fotoRenatoGp from "../assets/avatar/img-gp.jpg";
import fotoRenatoRuiz from "../assets/avatar/img-renato.jpg";

// Dados reais da equipe, extraídos do README e da página integrantes.html do projeto original.
export const integrantes: Integrante[] = [
  {
    id: "joao-vitor-cruz-de-lima",
    nome: "João Vitor Cruz de Lima",
    rm: "571277",
    foto: fotoJoao,
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-cruz-de-lima-ba4862219",
    github: "https://github.com/JoaoVitor-2209",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (turma 1TDSPJ), atuou no desenvolvimento do front-end da SoulPass.",
  },
  {
    id: "matheus-ferreira-antonio",
    nome: "Matheus Ferreira Antônio",
    rm: "570933",
    foto: fotoMatheus,
    linkedin: "https://www.linkedin.com/in/matheus-ferreira-ant%C3%B4nio-592138365",
    github: "https://github.com/matheusfa08",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (turma 1TDSPJ), integrante da equipe SoulPass.",
  },
  {
    id: "sophia-silveira-dos-santos",
    nome: "Sophia Silveira dos Santos",
    rm: "571932",
    foto: fotoSophia,
    linkedin: "https://www.linkedin.com/in/sophia-silveira-9325493a1",
    github: "https://github.com/SophiaS4nt",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (turma 1TDSPJ), integrante da equipe SoulPass.",
  },
  {
    id: "renato-da-silva-tenorio",
    nome: "Renato da Silva Tenorio",
    rm: "572928",
    foto: fotoRenatoGp,
    linkedin: "https://www.linkedin.com/in/renato-silvagp",
    github: "https://github.com/EUGP2",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (turma 1TDSPJ), integrante da equipe SoulPass.",
  },
  {
    id: "renato-ruiz-ferreira-fonseca-scolamieri",
    nome: "Renato Ruiz Ferreira Fonseca Scolamieri",
    rm: "568667",
    foto: fotoRenatoRuiz,
    linkedin: "https://www.linkedin.com/in/renato-ruiz-ferreira-fonseca-scolamieri-32698840b",
    github: "https://github.com/Renatoruiz1",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (turma 1TDSPJ), integrante da equipe SoulPass.",
  },
];
