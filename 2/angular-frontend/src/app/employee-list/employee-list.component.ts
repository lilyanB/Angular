import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../models/tableau.models';
import { TableauEmployeeService } from '../services/tableau-employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  @Input() elements!: Employee;
  myemployee!: Observable<Employee[]>;

  constructor(private TableauEmployeeService: TableauEmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.myemployee = this.TableauEmployeeService.getAllEmployee();
  }

  onViewEmployee( id: Number){
    this.router.navigateByUrl(`employee/${id}`)
  }
}
