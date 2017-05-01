import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';


@Component({
  selector: 'henry-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public email;
	public password;

  constructor(private dataService: DataService) { 
  	this.email ='';
  	this.password = '';
  }

  ngOnInit() {

  }

  login(data){
  	return this.dataService.loginme(data);
  }

}
