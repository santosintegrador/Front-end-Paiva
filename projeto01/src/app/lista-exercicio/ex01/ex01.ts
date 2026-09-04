import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  standalone: false,
  templateUrl: './ex01.html',
  styleUrl: './ex01.scss',
})
export class Ex01 {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';
}
