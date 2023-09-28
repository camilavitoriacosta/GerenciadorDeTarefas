import { Component } from '@angular/core';
import { Coluna } from 'src/app/models/Coluna';
import { ColunaService } from 'src/app/services/coluna.service';

@Component({
  selector: 'app-coluna',
  templateUrl: './coluna.component.html',
  styleUrls: ['./coluna.component.css']
})

export class ColunaComponent {
  colunas: Coluna[] = [];

  constructor(private colunaService: ColunaService) {
    this.obterColunas();
  }

  obterColunas(): void {
    this.colunaService.getAll().subscribe((colunas) => (this.colunas = colunas));
    ;
  }
}
