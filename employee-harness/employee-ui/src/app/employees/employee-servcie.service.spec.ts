import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeServcieService } from './employee-servcie.service';

describe('EmployeeServcieService', () => {
  let service: EmployeeServcieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeServcieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
