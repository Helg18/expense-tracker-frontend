import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from "../data.service";
import { FormsModule } from "@angular/forms";
import 'rxjs/Rx'
import { Ng2OrderModule } from 'ng2-order-pipe';

const routes: Routes = [
	{
    	path: '',
    	component: TransactionComponent
 	}

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, Ng2OrderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionComponent],
  providers: [DataService]
})
export class TransactionModule { }
