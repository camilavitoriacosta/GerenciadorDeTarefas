export interface Tarefa {
  "id": number | null,
  "titulo": string,
  "data": string | Date,
  "horario": string,
  "finalizada": boolean,
  "coluna_id": number | null
}