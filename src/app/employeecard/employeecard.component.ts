import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employeecard',
  templateUrl: './employeecard.component.html',
  styleUrls: ['./employeecard.component.css']
})
export class EmployeecardComponent {
    @Input()
    emp!:Employee;

    @Output() deleteEmployee = new EventEmitter<Employee>();

     delete() {
    this.deleteEmployee.emit(this.emp);
  }
}
