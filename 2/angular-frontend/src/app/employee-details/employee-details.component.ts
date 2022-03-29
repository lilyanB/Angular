import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/tableau.models';
import { TableauEmployeeService } from '../services/tableau-employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number
  employee!: Employee

  constructor(private route: ActivatedRoute,
              private TableauEmployeeService: TableauEmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.TableauEmployeeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

  updateEmployee( id: Number){
    this.router.navigateByUrl(`update/${id}`)
  }

}
