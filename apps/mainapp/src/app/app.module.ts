import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { SharedlibModule } from 'sharedlib';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    SharedlibModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
