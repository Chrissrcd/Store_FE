import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marathon_FE';

  //creamos el constructor donde definimos el enrutador
  constructor(private router:Router){}
  //metodo para acceder a la ruta del componente listar
  ListEnterprises(){
    this.router.navigate(['/enterprises']);
  }
  //metodo para acceder a la ruta del componente add
  NewEnterprise(){
    this.router.navigate(['/enterprises/add']);
  }
  // Método para acceder a la ruta del componente ListarDepartments
  ListDepartments() {
    this.router.navigate(['/departments']);
  }
  // Método para acceder a la ruta del componente AddDepartments
  NewDepartment() {
    this.router.navigate(['/departments/add']);
  }
  // Método para acceder a la ruta del componente ListarEmployees
  ListEmployees() {
    this.router.navigate(['/employees']);
  }
  // Método para acceder a la ruta del componente AddEmployees
  NewEmployee() {
    this.router.navigate(['/employees/add']);
  }
}
