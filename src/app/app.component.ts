import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private employeeService:EmployeeService){}
  title = 'EmployeeApp';
  employeeList:any=[];
  designation:string = "Developer";
  name:string = "John";
  email:string = "";
  

  getEmployees(){
    console.log("getEmployees");
    this.employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employeeList = data;
        console.log(this.employeeList);
      }
    )

  }
  saveEmployee(){
   let employee={
      name:this.name,
      email:this.email,
      designation:this.designation
   }
   console.log(employee);
    this.employeeService.saveEmployee(employee).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
