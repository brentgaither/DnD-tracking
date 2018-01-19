import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemService } from './item.service';
import { MockHttpClient } from '../../testing/mock-http-client';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ItemService,  MockHttpClient]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', inject([MockHttpClient, HttpTestingController],
    (http: MockHttpClient, httpMock: HttpTestingController, service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
