import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
