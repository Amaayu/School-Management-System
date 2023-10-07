import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from '@angular/router';
import { StudentFormComponent } from './form/student-form.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  { path: '', component: StudentlistComponent},
  { path: 'student-form', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
