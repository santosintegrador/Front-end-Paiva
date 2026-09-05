import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicioRoutingModule } from './lista-exercicio-routing-module';
import { Ex01 } from './ex01/ex01';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';
import { Ex05 } from './ex05/ex05';
import { Ex06 } from './ex06/ex06';
import { Ex07 } from './ex07/ex07';
import { Ex08 } from './ex08/ex08';
import { Ex09 } from './ex09/ex09';
import { Ex10 } from './ex10/ex10';
import { Ex11 } from './ex11/ex11';
import { Desafio } from './desafio/desafio';

@NgModule({
  declarations: [Ex01, Ex02, Ex03, Ex04, Ex05, Ex06, Ex07, Ex08, Ex09, Ex10, Ex11, Desafio],
  imports: [CommonModule, FormsModule, ListaExercicioRoutingModule],
})
export class ListaExercicioModule {}
