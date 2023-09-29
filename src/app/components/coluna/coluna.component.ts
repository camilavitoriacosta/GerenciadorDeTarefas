import { Component } from '@angular/core';
import { Coluna } from 'src/app/models/Coluna';
import { ColunaService } from 'src/app/services/coluna.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-coluna',
  templateUrl: './coluna.component.html',
  styleUrls: ['./coluna.component.css']
})

export class ColunaComponent {
  colunas: Coluna[] = [];

  constructor(private colunaService: ColunaService, private tarefaService: TarefaService) {
    this.obterColunas();
  }

  obterColunas(): void {
    this.colunaService.getAll().subscribe((colunas) => {
      this.colunas = colunas;
      this.obterTarefas();
    });

  }

  obterTarefas() {
    this.colunas.forEach(coluna => {
      this.tarefaService.getById(coluna.id).subscribe((tarefas) => {
        coluna.tarefas = tarefas
        console.log(tarefas);
      })
    });
  }
}
