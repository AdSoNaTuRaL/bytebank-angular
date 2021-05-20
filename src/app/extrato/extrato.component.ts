import { Component, Input, OnInit } from '@angular/core';

interface ITransferencia {
  data?: Date;
  valor?: number;
  destino?: string;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: ITransferencia[] = [];

  constructor() { }

  ngOnInit(): void { }

}
