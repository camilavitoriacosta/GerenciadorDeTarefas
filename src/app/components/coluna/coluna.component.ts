import { Component, ViewChild } from '@angular/core';
import { Coluna } from 'src/app/models/Coluna';
import { Tarefa } from 'src/app/models/Tarefa';
import { ColunaService } from 'src/app/services/coluna.service';
import { TarefaService } from 'src/app/services/tarefa.service';
import { ModalTarefaComponent } from '../modal-tarefa/modal-tarefa.component';

@Component({
  selector: 'app-coluna',
  templateUrl: './coluna.component.html',
  styleUrls: ['./coluna.component.css']
})

export class ColunaComponent {
  @ViewChild('modal') modal!: ModalTarefaComponent;
  colunas: Coluna[] = [];

  constructor(private colunaService: ColunaService, private tarefaService: TarefaService) {
  }

  ngOnInit() {
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
      })
    });
  }

  abrirModal(coluna_id: number) {
    this.modal.abrir(coluna_id);
  }

  abrirModalEdicao(coluna_id: number, tarefa: Tarefa) {
    this.modal.abrirModoEdicao(coluna_id, tarefa);
  }
}
