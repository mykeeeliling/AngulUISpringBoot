import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = 'http://localhost:8080/employee'

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiURL}/list`)
  }

  deleteEmployee(employee:Employee): Observable<Employee> {
    const url = `${this.apiURL}/${employee.employeeNumber}`;
    return this.http.delete<Employee>(url);
  }
}
