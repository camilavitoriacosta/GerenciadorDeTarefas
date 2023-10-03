import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.css']
})

export class ModalTarefaComponent {
  @Input() tarefa: Tarefa = {
    id: 0,
    titulo: '',
    data: '',
    horario: '',
    finalizada: false,
    coluna_id: 0
  };
  formTarefa!: FormGroup;
  mostrar: boolean = false;
  coluna_id!: number;

  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService) {
    this.formTarefa = this.formBuilder.group({
      id: [this.tarefa.id],
      titulo: [this.tarefa.titulo],
      horario: [this.tarefa.horario],
      data: [this.tarefa.data],
      finalizada: [this.tarefa.finalizada],
      coluna_id: [this.tarefa.coluna_id]
    })
    this.coluna_id = this.tarefa ? this.tarefa.coluna_id : 0;
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }

  abrir(coluna_id: number) {
    this.coluna_id = coluna_id;
    this.toggle();
  }

  onSubmit() {
    this.tarefa = this.formTarefa.value;
    this.tarefa.coluna_id = this.coluna_id;
    this.tarefaService.post(this.tarefa).subscribe((tarefas) => {
      this.toggle();
    })
  }
}
