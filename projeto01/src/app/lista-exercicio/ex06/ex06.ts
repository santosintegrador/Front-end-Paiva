import { Component } from '@angular/core';

@Component({
  selector: 'app-ex06',
  standalone: false,
  templateUrl: './ex06.html',
  styleUrl: './ex06.scss',
})
export class Ex06 {
    quantidade = 0;
   
  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    this.quantidade--;
  }


}
