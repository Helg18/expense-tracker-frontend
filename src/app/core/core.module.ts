import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
     path: '',
     loadChildren: './../home/home.module#HomeModule'
   },
   {
     path: 'login',
     loadChildren: './../login/login.module#LoginModule'
   },
   {
     path: 'register',
     loadChildren: './../register/register.module#RegisterModule'
   },
   {
     path: 'categories',
     loadChildren: './../category/category.module#CategoryModule'
   },
   {
     path: 'transactions',
     loadChildren: './../transaction/transaction.module#TransactionModule'
   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
			  		ShellComponent, 
			  		TopBarComponent, 
			  		MainContentComponent, 
            FooterComponent
		  		],
  exports:[
  			ShellComponent
  			]
})
export class CoreModule { }
