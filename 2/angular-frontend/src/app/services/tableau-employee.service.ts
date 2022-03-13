import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/tableau.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableauEmployeeService {

  constructor(private http: HttpClient) { }

  tableau: Employee[] = []

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/api/v1/employees');
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post('http://localhost:8080/api/v1/employees', employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:8080/api/v1/employees/${id}`);
  }

}
