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
  formTarefa!: FormGroup;
  @Input() tarefa!: Tarefa;

  mostrar: boolean = false;

  
  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService) {
    // this.tarefa = {
    //   id: 0,
    //   "titulo": "Teste",
    //   "data": new Date("29/09/2023"),
    //   "horario": "09:30",
    //   "finalizada": false,
    // }
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
