import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColunaComponent } from './components/coluna/coluna.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { AreaComponent } from './components/pages/area/area.component';
import { BotaoComIconeComponent } from './components/botao-com-icone/botao-com-icone.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ColunaComponent,
    TarefaComponent,
    AreaComponent,
    BotaoComIconeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
