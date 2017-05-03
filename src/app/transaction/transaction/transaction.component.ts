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
    this.listar();
  }

  //listar todas las trans
  listar(){
        this.dataService.transaccionListar().subscribe(
      (data) => this.listado = data
    );
  }//listar

  //eliminar una transaccion
  eliminar(data){
    this.dataService.transEliminar(data).subscribe(
      (data)=> alert(data.msg)
    );
    this.listar();
  }

}
