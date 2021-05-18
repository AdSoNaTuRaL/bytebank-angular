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
  transferencia: ITransferencia = {};

  transferir($event: any): void {
    console.log($event);

    this.transferencia = $event;
  }

  exibirModalErro($event: any): void {}
}
