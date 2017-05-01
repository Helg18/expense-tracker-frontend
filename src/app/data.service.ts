import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
	//Basicas
	public grant_type;
	public client_id;
	public client_secret;

	//End points
	public urlLogin;


  constructor( private http: Http) { 
  	this.urlLogin = 'http://127.0.0.1:8000/oauth/token';
  	this.grant_type = 'password';
  	this.client_id = '2';
  	this.client_secret = 'bPJPNVw09uNa1a430OBrm7NjRbrtGFMn4IJCBOmj';

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
  	console.log(params);
  	return this.http.post(this.urlLogin, params, { headers: headers })
  									.map(response => response.json())
  									.subscribe(
							  			(data) => {
							  									console.log(data),
							  									window.sessionStorage.setItem('miToken', 'Bearer '+data.access_token),
							  									console.log( window.sessionStorage.getItem('miToken') )
							  			}

							  		);
  }
}
