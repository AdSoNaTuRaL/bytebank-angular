import { Transferencia } from './../../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transferencias: Transferencia [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.transferencias = [];
  }

  all(): Observable<Transferencia[]> {
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }
}
