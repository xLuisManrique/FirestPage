import { TestBed } from '@angular/core/testing';

import { ContactscriptService } from './contactscript.service';

describe('ContactscriptService', () => {
  let service: ContactscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
