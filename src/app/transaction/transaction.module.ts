import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from "../data.service";
import { FormsModule } from "@angular/forms";
import 'rxjs/Rx'

const routes: Routes = [
	{
    	path: '',
    	component: TransactionComponent
 	}

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionComponent],
  providers: [DataService]
})
export class TransactionModule { }
