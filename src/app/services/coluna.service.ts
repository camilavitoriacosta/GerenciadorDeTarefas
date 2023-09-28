import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coluna } from '../models/Coluna';
@Injectable({
  providedIn: 'root'
})
export class ColunaService {
  private apiUrl = 'http://localhost:3000/colunas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Coluna[]> {
    return this.http.get<Coluna[]>(this.apiUrl);
  }
}
