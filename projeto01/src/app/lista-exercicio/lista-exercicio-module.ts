import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicioRoutingModule } from './lista-exercicio-routing-module';
import { Ex01 } from './ex01/ex01';
import { Ex02 } from './ex02/ex02';

@NgModule({
  declarations: [Ex01, Ex02],
  imports: [CommonModule, FormsModule, ListaExercicioRoutingModule],
})
export class ListaExercicioModule {}
