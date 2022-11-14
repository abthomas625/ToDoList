import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CompletetaskComponent } from './completetask/completetask.component';
import { RemovetaskComponent } from './removetask/removetask.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    CompletetaskComponent,
    RemovetaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
