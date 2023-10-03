import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule, calendarEvent, clock, xLg } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComIconeComponent } from './components/botao-com-icone/botao-com-icone.component';
import { ColunaComponent } from './components/coluna/coluna.component';
import { AreaComponent } from './components/pages/area/area.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTarefaComponent } from './components/modal-tarefa/modal-tarefa.component';

const icons = {
  calendarEvent,
  clock, xLg
};

@NgModule({
  declarations: [
    AppComponent,
    ColunaComponent,
    TarefaComponent,
    AreaComponent,
    BotaoComIconeComponent,
    ModalTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '1em',
      height: '1em',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
