import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
    	path: '',
    	component: TransactionComponent
 	}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }
