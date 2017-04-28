import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: '',
     component: CategoryComponent
   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
