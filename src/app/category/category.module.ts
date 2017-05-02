import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import 'rxjs/Rx';

const routes: Routes = [
   {
     path: '',
     component: CategoryComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryComponent],
  providers:[DataService]
})
export class CategoryModule { }
