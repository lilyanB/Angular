import { TestBed } from '@angular/core/testing';

import { TableauEmployeeService } from './tableau-employee.service';

describe('TableauEmployeeService', () => {
  let service: TableauEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
