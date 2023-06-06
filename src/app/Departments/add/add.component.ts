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
    this.service.createDepartment(this.department)
      .subscribe(data => {
        alert("Se agregó con éxito");
        this.router.navigate(["listar"]);
      });
  }
}
