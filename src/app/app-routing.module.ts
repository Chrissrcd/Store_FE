import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes creados
import { ListarEnterprisesComponent } from './Enterprises/listar/listar.component';
import { AddEnterprisesComponent } from './Enterprises/add/add.component';
import { EditEnterprisesComponent } from './Enterprises/edit/edit.component';

import { ListarDepartmentsComponent } from './Departments/listar/listar.component';
import { AddDepartmentsComponent } from './Departments/add/add.component';
import { EditDepartmentsComponent } from './Departments/edit/edit.component';

import { ListarEmployeesComponent } from './Employees/listar/listar.component';
import { AddEmployeesComponent } from './Employees/add/add.component';
import { EditEmployeesComponent } from './Employees/edit/edit.component';

const routes: Routes = [
  // Rutas para los componentes de Enterprises
  { path: 'enterprises', component: ListarEnterprisesComponent },
  { path: 'enterprises/add', component: AddEnterprisesComponent },
  { path: 'enterprises/edit/:id', component: EditEnterprisesComponent },

    // Rutas para los componentes de Departments
    { path: 'departments', component: ListarDepartmentsComponent },
    { path: 'departments/add', component: AddDepartmentsComponent },
    { path: 'departments/edit/:id', component: EditDepartmentsComponent },
  
    // Rutas para los componentes de Employees
    { path: 'employees', component: ListarEmployeesComponent },
    { path: 'employees/add', component: AddEmployeesComponent },
    { path: 'employees/edit/:id', component: EditEmployeesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
