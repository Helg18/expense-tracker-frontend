import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';


@Component({
  selector: 'henry-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	public listado;

  constructor( private dataService: DataService) { 
  	this.listado ='';
  }

  ngOnInit() {
  	this.listar();
  }

  listar(){
  	 this.dataService.categoriasListar()
  	 								.subscribe(
							      	(data)=> {
							      		this.listado = data
							      });
  }//end listar

  mostrarFormulario(data){
  	alert('mostrar formulario');
  }//end mostrarFormulario

  eliminar(data){
  	//console.log(data)
  	let act = confirm('Esta accion eliminara las transacciones de esta categoria');
  		if (act) {
		  	this.dataService.categoriaseliminar(data);
		  	this.listar();
  		} 
  		return false;
  }


}
