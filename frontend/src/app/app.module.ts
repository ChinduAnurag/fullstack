import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './components/student-entry/student-entry.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { Route, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentUpdateComponent,
    StudentViewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
