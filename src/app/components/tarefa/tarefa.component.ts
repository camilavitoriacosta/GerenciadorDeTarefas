import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() abrirModal: EventEmitter<any> = new EventEmitter();
  formTarefaFinalizada!: FormGroup;

  ngOnInit() {
    this.formTarefaFinalizada = this.formBuilder.group({
      finalizada: [this.tarefa.finalizada],
    })
  }

  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService) {
  }

  onSubmit() {
    this.tarefa.finalizada = this.formTarefaFinalizada.controls['finalizada'].value;
    this.tarefaService.put(this.tarefa).subscribe((tarefa) => (this.tarefa = tarefa));
  }

  handleAbrirModal() {
    this.abrirModal.emit();
  }
}
