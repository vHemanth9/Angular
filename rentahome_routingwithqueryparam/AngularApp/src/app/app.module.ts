import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';  
export const routes: Routes = [
  
// fill the code
{ path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
	 	  	    	   	 	      	 	
