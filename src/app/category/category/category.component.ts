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
	public modify;
	public modificarCategory;
	public modificarCategoryId;
	public categoria;

  constructor( private dataService: DataService) { 
  	this.listado ='';
  	this.categoria ='';
  	this.modificarCategory ='';
  	this.modificarCategoryId ='';
  	this.visible = true;
  	this.modify = true;
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

  formModify(data){
  	if (this.modify) {
  		this.modificarCategory = data.category;
  		this.modificarCategoryId = data.id;
  		this.modify = false;
  	} else {
  		this.modify = true;
  	}
  }//end formModify

  actualizar(data){
		this.dataService.categoriasActualizar(data);
		this.modificarCategory = "";
		this.modificarCategoryId = "";
		this.modify = true;
		this.listar();
  	return true;
  }//actualizar


}
