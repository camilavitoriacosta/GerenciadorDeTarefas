import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.css']
})

export class ModalTarefaComponent {
  @Output() atualizarLista: EventEmitter<any> = new EventEmitter();
  @Input() tarefa: Tarefa = this.inicializarTarefa();
  formTarefa!: FormGroup;
  mostrar: boolean = false;
  edicao: boolean = false;

  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService) {
  }

  ngOnInit() {
    this.formTarefa = this.formBuilder.group({
      id: [this.tarefa.id],
      titulo: [this.tarefa.titulo],
      horario: [this.tarefa.horario],
      data: [this.tarefa.data],
      finalizada: [this.tarefa.finalizada],
      coluna_id: [this.tarefa.coluna_id]
    })
  }

  toggle() {
    this.resetarVariaveis();
    this.mostrar = !this.mostrar;
  }

  abrir(coluna_id: number) {
    this.toggle();
    this.formTarefa.controls['coluna_id'].setValue(coluna_id);
  }

  abrirModoEdicao(tarefa: Tarefa) {
    this.toggle();
    this.edicao = true;
    this.preencherCampos(tarefa);
  }

  preencherCampos(tarefa: Tarefa) {
    this.formTarefa.controls['id'].setValue(tarefa.id);
    this.formTarefa.controls['titulo'].setValue(tarefa.titulo);
    this.formTarefa.controls['horario'].setValue(tarefa.horario);
    this.formTarefa.controls['data'].setValue(tarefa.data);
    this.formTarefa.controls['finalizada'].setValue(tarefa.finalizada);
    this.formTarefa.controls['coluna_id'].setValue(tarefa.coluna_id);
  }

  onSubmit() {
    this.tarefa = this.formTarefa.value;
    if (this.edicao) {
      this.tarefaService.put(this.tarefa).subscribe((tarefas) => {
        this.toggle();
        this.handleAtualizarLista();
      })
    }
    else {
      this.tarefaService.post(this.tarefa).subscribe((tarefas) => {
        this.toggle();
        this.handleAtualizarLista();
      })
    }
  }

  resetarVariaveis() {
    this.edicao = false;
    this.tarefa = this.inicializarTarefa();
    this.preencherCampos(this.tarefa);
  }

  inicializarTarefa() {
    return {
      id: null,
      titulo: '',
      data: '',
      horario: '',
      finalizada: false,
      coluna_id: null
    };
  }

  handleAtualizarLista() {
    this.atualizarLista.emit();
  }
}