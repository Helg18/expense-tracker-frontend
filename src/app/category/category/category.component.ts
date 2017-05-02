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
	public visible;
	public categoria;

  constructor( private dataService: DataService) { 
  	this.listado ='';
  	this.categoria ='';
  	this.visible = true;
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
  }//end


  formularioCrear(){
  	if (this.visible) {
  		this.visible = false;
  	} else {
  		this.visible = true;
  	}

  }//end formularioCrear

  nueva(data){
  	this.dataService.categoriasCrear(data);
		this.visible = true;
  	this.categoria ='';
  	this.listar();
  	return true;
  }



}
