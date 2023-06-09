import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../Service/employees.service';
import Employee from 'src/app/Models/Employees';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarEmployeesComponent implements OnInit {

  employees: Employee[] = []; // Asignación inicial vacía
  constructor(private service: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  Editar(employee: Employee): void {
    localStorage.setItem('id', employee.id.toString());
    this.router.navigate(['/employees/edit', employee.id]);
  }

  Delete(employee: Employee): void {
    this.service.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(e => e !== employee);
      alert('Empleado eliminado.');
    });
  }

}
