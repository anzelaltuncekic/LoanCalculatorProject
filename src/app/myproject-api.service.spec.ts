import { TestBed } from '@angular/core/testing';
import { MyprojectApiService } from './myproject-api.service';

describe('MyprojectApiService', () => {
  let service: MyprojectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
