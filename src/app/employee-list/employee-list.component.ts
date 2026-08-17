import { Component } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
   employees: Employee[] = [
  {
    id: 1,
    name: 'srinath',
    email: 'arun.kumar@example.com',
    role: 'Frontend Developer',
    department: 'IT',
    salary: 55000,
    joiningDate: '2023-06-15',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'Backend Developer',
    department: 'IT',
    salary: 60000,
    joiningDate: '2022-09-10',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Rahul Singh',
    email: 'rahul.singh@example.com',
    role: 'HR Manager',
    department: 'Human Resources',
    salary: 50000,
    joiningDate: '2021-03-22',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Divya Raj',
    email: 'divya.raj@example.com',
    role: 'UI/UX Designer',
    department: 'Design',
    salary: 45000,
     joiningDate: '2024-01-08',
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Vikram Das',
    email: 'vikram.das@example.com',
    role: 'Software Engineer',
    department: 'Engineering',
    salary: 65000,
    joiningDate: '2020-11-30',
    status: 'Active'
  }
];

   searchTerm = '';

  filteredEmployees: Employee[] = this.employees;

 searchEmployees() {
  this.filteredEmployees = this.employees.filter(emp =>
    emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
deleteEmployee(emp: Employee) {
  debugger;
  this.employees = this.employees.filter(e => e.id !== emp.id);
  this.filteredEmployees = this.filteredEmployees.filter(e => e.id !== emp.id);
}
}


