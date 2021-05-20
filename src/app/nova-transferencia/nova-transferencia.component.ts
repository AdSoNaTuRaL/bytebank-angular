import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService) {}

  transferir(): void {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionarTransferencia(valorEmitir).subscribe(
      (result) => {
        console.log(result);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = '';
  }
}
