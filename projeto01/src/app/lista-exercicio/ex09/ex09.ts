import { Component } from '@angular/core';

@Component({
  selector: 'app-ex09',
  standalone: false,
  templateUrl: './ex09.html',
  styleUrl: './ex09.scss',
})
export class Ex09 {

  produto = 'Monitor Gamer';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    this.estoque--;
  }
}
