import { TestBed } from '@angular/core/testing';

import { DepartmentsEmployeesService } from './departments-employees.service';

describe('DepartmentsEmployeesService', () => {
  let service: DepartmentsEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
