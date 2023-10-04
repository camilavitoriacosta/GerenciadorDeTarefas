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
  coluna_id!: number | null;
  edicao: boolean = false;

  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService) {
    this.coluna_id = this.tarefa ? this.tarefa.coluna_id : null;
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
    this.mostrar = !this.mostrar;
    this.resetarVariaveis()
  }

  abrir(coluna_id: number) {
    this.coluna_id = coluna_id;
    this.toggle();
  }

  abrirModoEdicao(coluna_id: number, tarefa: Tarefa) {
    this.toggle();
    this.coluna_id = coluna_id;
    this.edicao = true;
    this.preencherCampos(tarefa);
    console.log(this.coluna_id);

  }

  preencherCampos(tarefa: Tarefa) {
    this.formTarefa.controls['id'].setValue(tarefa.id);
    this.formTarefa.controls['titulo'].setValue(tarefa.titulo);
    this.formTarefa.controls['horario'].setValue(tarefa.horario);
    this.formTarefa.controls['data'].setValue(tarefa.data);
    this.formTarefa.controls['finalizada'].setValue(tarefa.finalizada);
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
      this.tarefa.coluna_id = this.coluna_id;
      this.tarefaService.post(this.tarefa).subscribe((tarefas) => {
        this.toggle();
        this.handleAtualizarLista();
      })
    }
  }

  resetarVariaveis() {
    this.edicao = false;
    this.coluna_id = 0;
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