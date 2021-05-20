import { Injectable } from '@angular/core';

interface ITransferencia {
  data?: Date;
  valor?: number;
  destino?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transferencias: ITransferencia [];

  constructor() {
    this.transferencias = [];
  }

  get ListOftransferencia(): ITransferencia[] {
    return this.transferencias;
  }

  adicionarTransferencia(transferencia: ITransferencia): void {
    this.hidratar(transferencia);

    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: ITransferencia): void {
    transferencia.data = new Date();
  }
}
