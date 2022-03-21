import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ErrorComponent } from './error.component';
import { DeactivateGuard } from './deactivate.gaurd';

import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NextComponent } from './next/next.component';
const routes: Routes = [
  {path: 'home', 
  component: HelloComponent  ,
  canDeactivate: [DeactivateGuard]
  },
  {path: 'next',component:NextComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}

];
@NgModule({
  imports:      [ BrowserModule, 
  ReactiveFormsModule,
  RouterModule.forRoot(routes),
  HttpClientModule,FormsModule ],
  declarations: [ AppComponent, 
  HelloComponent ,ErrorComponent, NextComponent],
  bootstrap:    [ AppComponent ],
  providers: [TestService,TestResolver, DeactivateGuard
  
  ]
})
export class AppModule { }
