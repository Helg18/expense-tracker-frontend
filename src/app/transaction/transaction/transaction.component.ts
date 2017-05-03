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
  public actualizaForm;

  //crear
  public subject;
  public categoryID;
  public tot;
  public amount;
  public category;
  public transID;


  constructor( private dataService: DataService) { 
    this.listado       = '';
    this.categorias    = '';
    this.crearForm     = true;
    this.actualizaForm = true;
    this.subject       = '';
    this.categoryID    = '';
    this.category      = '';
    this.tot           = '';
    this.amount        = '';
    this.transID       = '';
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


  //agregar una transaccion
  //Mostrar formulario
  actualizarNuevo(data){
    console.log(data);
    if (this.actualizaForm) {
      this.actualizaForm = false

      this.crearForm = true;
      this.subject = data.subject;
      this.categoryID = data.category_id;
      this.category = data.category;
      this.tot = data.tot;
      this.amount = data.amount;
      this.transID = data.id;
    } else {
      this.actualizaForm = true;
    }
  }//end formulario crear



  actualizar(data){
    this.dataService.trasActualizar(data);
    this.crearForm = false;
    this.subject = '';
    this.categoryID = '';
    this.category = '';
    this.tot = '';
    this.amount = '';
    this.transID = '';
    this.listar();
  }

  viewlastday(days){
    this.dataService.transPorTiempo(days).subscribe(
      (data) => this.listado = data
    );
    this.listar();
  }

}
