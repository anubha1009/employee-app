import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl = 'http://20.185.16.165:8083/employee';
 
  constructor( private http: HttpClient) { }
  getEmployees(){
    return this.http.get(this.baseUrl + "/all");
  };
  saveEmployee(employee: any){
    return this.http.post(this.baseUrl,employee);
  }

}
