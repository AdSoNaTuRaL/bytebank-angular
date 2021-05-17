import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: string;

  transferir() {
    console.log('Teste');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
