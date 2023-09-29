import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  getById(coluna_id: number): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl + "?coluna_id=" + coluna_id);
  }

  put(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(this.apiUrl + "/" + tarefa.id, tarefa);
  }
}
