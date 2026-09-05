import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {

  produto = 'Mouse Gamer';
  preco = 150.00;
  quantidade = 1;
  recado = '';

  get total() {
    return this.preco * this.quantidade;
  }

  diminuir() {
      this.quantidade--;
    }
  

  aumentar() {
    this.quantidade++;
  }

  mensagem() {
    this.recado = this.quantidade + ' ' + this.produto + ' foram adicionados ao carrinho!';
  }

}
