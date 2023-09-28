import { Tarefa } from "./Tarefa";

export interface Coluna {
  "id": number,
  "nome": string,
  "cor": string,
  "tarefas": Tarefa[]
}