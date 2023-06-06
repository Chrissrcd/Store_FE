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

  constructor(private router: Router, private service: EmployeesService) { }

  ngOnInit(): void {
  }

  Guardar(): void {
    this.service.createEmployee(this.employee)
      .subscribe(data => {
        alert("Se agregó con éxito");
        this.router.navigate(["listar"]);
      });
  }
}
