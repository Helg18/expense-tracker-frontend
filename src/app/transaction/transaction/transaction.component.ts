import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'henry-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  public listado;

  constructor( private dataService: DataService) { 
    this.listado = '';
  }

  ngOnInit() {
    this.dataService.transaccionListar().subscribe(
      (data) => this.listado = data
    );
  }

}
