import { TransferenciaService } from './services/transferencia.service';
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

  constructor(private service: TransferenciaService) {}
}
