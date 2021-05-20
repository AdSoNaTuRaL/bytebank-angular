import { Component } from '@angular/core';

interface ITransferencia {
  valor?: number;
  destino?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: ITransferencia[] = [];

  transferir($event: any): void {
    const transferencia = {...$event, data: new Date()};

    this.transferencias.push(transferencia);
  }
}
