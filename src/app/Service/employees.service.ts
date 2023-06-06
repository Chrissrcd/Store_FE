import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../Models/Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'http://localhost:8080/marathon_store'; // Ruta del proyecto backend en Java

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);
  }

  getEmployeeId(id: number) {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${this.apiUrl}/employees/${employee.id}`, employee);
  }

  deleteEmployee(employee: Employee) {
    return this.http.delete<Employee>(`${this.apiUrl}/employees/${employee.id}`);
  }
}