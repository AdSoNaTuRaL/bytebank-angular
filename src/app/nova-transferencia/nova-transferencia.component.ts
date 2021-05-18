import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor!: number;
  destino!: string;

  private isValido(): boolean {
    const valido = this.valor > 0;

    if (!valido) {
      this.valoresComErro.emit('Informe um valor valido!');
      this.limparCampos();
    }

    return valido;
  }

  transferir(): void {
    if (this.isValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);
      this.limparCampos();
    }
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = '';
  }
}
