import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../Service/employees.service';
import Employee from 'src/app/Models/Employees';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddEmployeesComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private router: Router, 
    private service: EmployeesService
  ) { }

  ngOnInit(): void {
  }

  Guardar(): void {
    this.employee.createdBy = 'Admin'; // Asignar el valor de createdBy
    this.employee.createDate = new Date(); // Asignar la fecha actual
    this.employee.modifiedBy = 'Admin';
    this.employee.modifiedDate = new Date();
    this.service.createEmployee(this.employee)
      .subscribe(data => {
        alert("Se agregó con éxito");
        this.router.navigate(["employees"]);
      });
  }
}
