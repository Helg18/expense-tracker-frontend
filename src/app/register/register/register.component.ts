import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'henry-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public name:any;
	public email;
	public password;

  constructor(private dataService: DataService) { 
		this.name = '';
		this.email = '';
		this.password = '';
  }

  ngOnInit() {
  }

  register(data){
  	return this.dataService.registerme(data);
  }

}
