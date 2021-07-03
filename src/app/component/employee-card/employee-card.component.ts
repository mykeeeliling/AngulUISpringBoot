import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../interface/employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employees!: Employee[];
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();
  deleteIcon = faTimes;
  editIcon = faPencilAlt;

  constructor() { }

  ngOnInit(): void {
    
  }

  deleteEmployeeButton(employee: any){
    this.deleteEmployee.emit(employee);
  }
}
