import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Department from '../Models/Departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private apiUrl = 'http://localhost:8080/marathon_be'; // Ruta del proyecto backend en Java

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  createDepartment(department: Department) {
    return this.http.post<Department>(`${this.apiUrl}/departments`, department);
  }

  getDepartmentId(id: number) {
    return this.http.get<Department>(`${this.apiUrl}/departments/${id}`);
  }

  updateDepartment(department: Department) {
    return this.http.put<Department>(`${this.apiUrl}/departments/${department.id}`, department);
  }

  deleteDepartment(department: Department) {
    return this.http.delete<Department>(`${this.apiUrl}/departments/${department.id}`);
  }
}