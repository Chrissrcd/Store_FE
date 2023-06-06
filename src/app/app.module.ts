import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEnterprisesComponent } from './Enterprises/listar/listar.component';
import { AddEnterprisesComponent } from './Enterprises/add/add.component';
import { EditEnterprisesComponent } from './Enterprises/edit/edit.component';
import { EnterprisesService } from '../app/Service/enterprises.service';
import { ListarDepartmentsComponent } from './Departments/listar/listar.component';
import { AddDepartmentsComponent } from './Departments/add/add.component';
import { EditDepartmentsComponent } from './Departments/edit/edit.component';
import { DepartmentsService } from '../app/Service/departments.service';
import { ListarEmployeesComponent } from './Employees/listar/listar.component';
import { AddEmployeesComponent } from './Employees/add/add.component';
import { EditEmployeesComponent } from './Employees/edit/edit.component';
import { EmployeesService } from '../app/Service/employees.service';



@NgModule({
  declarations: [
    AppComponent,
    ListarEnterprisesComponent,
    AddEnterprisesComponent,
    EditEnterprisesComponent,
    ListarDepartmentsComponent,
    AddDepartmentsComponent,
    EditDepartmentsComponent,
    ListarEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EnterprisesService,
    DepartmentsService,
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
