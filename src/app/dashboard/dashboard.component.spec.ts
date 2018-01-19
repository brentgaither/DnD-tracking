import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ItemService } from '../item/shared/item.service';
import { MockHttpClient } from '../testing/mock-http-client';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const itemServiceStub = {
      Items: [{name: 'test'}],
      getItems: function(){return; }
    };
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:    [
         ItemService,
        {provide: HttpClient, UserClass: MockHttpClient}
       ]
    })
    .compileComponents();
    const itemService = TestBed.get(ItemService);
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
