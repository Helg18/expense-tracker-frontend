import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/Rx';

const routes: Routes = [
   {
     path: '',
     component: LoginComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers:[DataService]
})
export class LoginModule { } 
