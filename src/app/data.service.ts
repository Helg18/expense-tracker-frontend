import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
	//Basicas
	public grant_type;
	public client_id;
	public client_secret;

//End points
  //Usuarios
  public urlLogin;
  public urlRegister;

  //categorias
  public listaCategorias;
  public eliminarCategorias;
  public actualizarCategorias;

  //Transacciones
  public listarTrans;



  constructor( private http: Http) { 
    this.urlLogin      = 'http://127.0.0.1:8000/oauth/token';
    this.urlRegister   = 'http://127.0.0.1:8000/api/register';
    this.grant_type    = 'password';
    this.client_id     = '2';
    this.client_secret = 'bPJPNVw09uNa1a430OBrm7NjRbrtGFMn4IJCBOmj';

    //CATEGORIAS
    this.listaCategorias    = 'http://127.0.0.1:8000/api/category';
    this.eliminarCategorias = 'http://127.0.0.1:8000/api/category/';
    this.actualizarCategorias = 'http://127.0.0.1:8000/api/category/';

    //TRANSACCIONES 
    this.listarTrans = 'http://127.0.0.1:8000/api/transaction/';

  }

  loginme(data){
  	if (data.email == undefined || data.email == '' ||
  			data.password == undefined || data.password == '') {
  		alert('Complete los campos de email y password');
  		return false;
  	}
  	let headers = new Headers();
  	let params = JSON.stringify({
  								username: data.email, 
  								password: data.password, 
  								grant_type: this.grant_type,
  								client_id: this.client_id,
  								client_secret: this.client_secret
  								 });
  	headers.append('Content-Type', 'application/json');
    //console.log(params);
  	return this.http.post(this.urlLogin, params, { headers: headers })
  									.map(response => response.json())
  									.subscribe(
							  			(data) => {
							  									//console.log(data),
							  									window.sessionStorage.setItem('miToken', 'Bearer '+data.access_token),
                                  alert("Has iniciado sesion con exito :) ")
							  			});
  }// fin loginme


  registerme(data){
    if ( data.name == '' || data.name == undefined ||
         data.email == '' || data.email == undefined ||
         data.password == '' || data.password == undefined
         ) {
              alert('Rellena todos los campos');
            } //end if validador

    let headers = new Headers();
    let params = JSON.stringify({
                  name: data.name,
                  email: data.email,
                  password: data.password
                   });
    headers.append('Content-Type', 'application/json');
    console.log(params);

    return this.http.post(this.urlRegister, params, {headers: headers})
                    .map( response => response.json())
                    .subscribe(
                      (data) => {
                        console.log(data);
                        alert(data.msg)
                      });


  }//end registerme

  //CATEGORIAS
  //listar Categorias
  categoriasListar(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))


    return this.http.get(this.listaCategorias, {headers: headers}).map(response => response.json());
  }//end categoriasListar

  //eliminar Categorias
  categoriaseliminar(data){
    if (data == '' || data == undefined ) {
      alert('No se recibieron los datos, por favor vuelva a intentarlo nuevamente');
     return false;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))


    return this.http.delete(this.eliminarCategorias+data, {headers: headers})
                    .map(response => response.json())
                    .subscribe(
                        (data) => alert(data.msg)
                      );

  }//end categoriaseliminar

  //crear categoria
  categoriasCrear(data){
    if (data == '' || data == undefined ) {
      alert('No se recibieron los datos, por favor vuelva a intentarlo nuevamente');
     return false;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))
    let params = JSON.stringify({ category: data.categoria });

    return this.http.post(this.listaCategorias, params, {headers:headers})
                    .map(response => response.json())
                    .subscribe(
                      (data)=> alert(data.msg)
                      );
  }//categoriasCrear


  categoriasActualizar(data){
    if (
        data.modificarCategory == '' || data.modificarCategory == undefined ||
        data.modificarCategoryId == '' || data.modificarCategoryId == undefined 
        ) {
      alert('No se recibieron los datos, por favor vuelva a intentarlo nuevamente');
     return false;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))
    let params = JSON.stringify({ category: data.modificarCategory });

    return this.http.put(this.actualizarCategorias+data.modificarCategoryId, params, {headers:headers})
                    .map(response => response.json())
                    .subscribe(
                      (data)=> alert(data.msg)
                      );
  }//categoriasCrear




  //TRANSACCIONES
  //Listar
  transaccionListar(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))

    return this.http.get(this.listarTrans, {headers: headers}).map(response => response.json());
  }

  //Eliminar
  transEliminar(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  window.sessionStorage.getItem('miToken'))

    return this.http.delete(this.listarTrans+data, {headers: headers}).map(response => response.json());
  
    
  }

}

