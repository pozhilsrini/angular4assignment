import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http,HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { AppRoutingModule, routingComponents } from './app.routes';
import { AppComponent } from './app.component';
import { ContactService } from './service/contact.service';

@NgModule({
  
  declarations: [
    AppComponent,   
    routingComponents,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
