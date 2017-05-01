import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { CoreModule } from 'app/core/core.module';
import { ShellComponent } from 'app/core/shell/shell.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
