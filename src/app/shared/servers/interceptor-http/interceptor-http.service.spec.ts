import { InterceptorHttpService } from './interceptor-http.service';
import { TestBed } from '@angular/core/testing';


describe('InterceptorHttpService', () => {
  let service: InterceptorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
