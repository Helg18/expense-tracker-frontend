import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'henry-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  //Metodos principales
  public listado;

  //Metodos auxiliares
  public categorias;

  //Visibles
  public crearForm;

  //crear
  public subject;
  public categoryID;
  public tot;
  public amount;


  constructor( private dataService: DataService) { 
    this.listado = '';
    this.categorias = '';
    this.crearForm = true;
    this.subject = '';
    this.categoryID = '';
    this.tot = '';
    this.amount = '';
  }

  ngOnInit() {
    this.todascategorias();
    this.listar();
  }

  //listar categorias
  todascategorias(){
    this.dataService.categoriasListar()
        .subscribe(
          (data)=> {
            this.categorias = data
          });
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

  //agregar una transaccion
  //Mostrar formulario
  formularioNuevo(){
    if (this.crearForm) {
      this.crearForm = false
    } else {
      this.crearForm = true;
    }
  }//end formulario crear

  //nueva
  nueva(data){
    if (data.categoryID == '' || data.tot == '' || data.subject == '' || data.amount == '' ) {
      alert('no se recibieron todos los datos.')
      return false;
    }
    this.dataService.transCrear(data);
    this.crearForm = true;
    this.subject = '';
    this.categoryID = '';
    this.tot = '';
    this.amount = '';
    this.listar();
  }//end nueva

}
