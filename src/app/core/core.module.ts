import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
			  		ShellComponent, 
			  		TopBarComponent, 
			  		MainContentComponent
		  		],
  exports:[
  			ShellComponent
  			]
})
export class CoreModule { }
