import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../Service/departments.service';
import Department from 'src/app/Models/Departments';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarDepartmentsComponent implements OnInit {

  departments: Department[] = []; // Asignación inicial vacía

  constructor(private service: DepartmentsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  Editar(department: Department): void {
    localStorage.setItem('id', department.id.toString());
    this.router.navigate(['/departments/edit', department.id]);
  }

  Delete(department: Department): void {
    this.service.deleteDepartment(department).subscribe(data => {
      this.departments = this.departments.filter(d => d !== department);
      alert('Departamento eliminado.');
    });
  }

}
