import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicioRoutingModule } from './lista-exercicio-routing-module';
import { Ex01 } from './ex01/ex01';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';
import { Ex05 } from './ex05/ex05';

@NgModule({
  declarations: [Ex01, Ex02, Ex03, Ex04, Ex05],
  imports: [CommonModule, FormsModule, ListaExercicioRoutingModule],
})
export class ListaExercicioModule {}
