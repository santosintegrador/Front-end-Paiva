import { Component } from '@angular/core';

@Component({
  selector: 'app-ex08',
  standalone: false,
  templateUrl: './ex08.html',
  styleUrl: './ex08.scss',
})
export class Ex08 {

  produto = 'Mouse Gamer';
  preco = 150.00;
  quantidade = 2;

  get total() {
    return this.preco * this.quantidade;
  }

}
