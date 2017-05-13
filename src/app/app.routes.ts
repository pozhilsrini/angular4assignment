
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
     { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'app', component: AppComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [AppComponent, ContactComponent ];  

