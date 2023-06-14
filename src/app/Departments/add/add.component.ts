import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../Service/departments.service';
import Department from 'src/app/Models/Departments';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  department: Department = new Department();

  constructor(private router: Router, private service: DepartmentsService) { }

  ngOnInit(): void {
  }

  Guardar(): void {
    this.department.createdBy = 'Admin'; // Asignar el valor de createdBy
    this.department.createDate = new Date(); // Asignar la fecha actual
    this.department.modifiedBy = 'Admin';
    this.department.modifiedDate = new Date();
    this.service.createDepartment(this.department)
      .subscribe(data => {
        alert("Se agregó con éxito");
        this.router.navigate(["departments"]);
      });
  }
}
