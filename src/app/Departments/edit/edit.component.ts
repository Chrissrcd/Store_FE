import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../Service/departments.service';
import Department from 'src/app/Models/Departments';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  department: Department = new Department();

  constructor(private router: Router, private service: DepartmentsService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.getDepartmentId(+id).subscribe(data => {
        this.department = data;
      });
    }
  }

  Actualizar(department: Department): void {
    this.service.updateDepartment(department).subscribe(data => {
      this.department = data;
      alert('¡Actualizado exitosamente!');
      this.router.navigate(['listar']);
    });
  }
}
