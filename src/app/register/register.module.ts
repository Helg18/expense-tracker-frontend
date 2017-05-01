import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/Rx';

const routes: Routes = [
   {
     path: '',
     component: RegisterComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent],
  providers:[DataService]
})
export class RegisterModule { }
