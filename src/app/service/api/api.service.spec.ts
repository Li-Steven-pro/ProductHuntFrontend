import { HttpClient } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http'
describe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  var originalTimeout : number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers : [ApiService]
    });
    service = TestBed.inject(ApiService);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(()=>{
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('Backend call', (done) => {
    service.getProductsByDate("2021-02-03").then((res)=>{
      expect(res.name.length).toBeGreaterThan(0);
      done();
    });
  });

  it('Bad call ', (done) => {
    service.getProductsByDate("202").then((res)=>{
      expect(res.name.length).toBe(0);
      done();
    });
  })
});