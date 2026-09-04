import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01 } from './ex01/ex01';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';
import { Ex05 } from './ex05/ex05';

const routes: Routes = [
  { path: 'ex01', component: Ex01 },
  { path: 'ex02', component: Ex02 },
  { path: 'ex03', component: Ex03 },
  { path: 'ex04', component: Ex04 },
  { path: 'ex05', component: Ex05 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaExercicioRoutingModule {}