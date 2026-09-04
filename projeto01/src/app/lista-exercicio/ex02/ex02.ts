import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  standalone: false,
  templateUrl: './ex02.html',
  styleUrl: './ex02.scss',
})
export class Ex02 {

  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  total = this.preco * this.quantidade;
}
