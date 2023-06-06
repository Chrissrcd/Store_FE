import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../Service/employees.service';
import Employee from 'src/app/Models/Employees';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditEmployeesComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private router: Router, private service: EmployeesService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.getEmployeeId(+id).subscribe(data => {
        this.employee = data;
      });
    }
  }

  Actualizar(employee: Employee): void {
    this.service.updateEmployee(employee).subscribe(data => {
      this.employee = data;
      alert('¡Actualizado exitosamente!');
      this.router.navigate(['listar']);
    });
  }
}