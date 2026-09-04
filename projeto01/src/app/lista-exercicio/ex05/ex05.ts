import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  standalone: false,
  templateUrl: './ex05.html',
  styleUrl: './ex05.scss',
})
export class Ex05 {
  curtidas = 0;
   
  aumentar() {
    this.curtidas++;
  }

}
