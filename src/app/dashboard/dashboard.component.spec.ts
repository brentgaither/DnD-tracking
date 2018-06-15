import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ItemService } from '../item/shared/item.service';
import { MatCardModule, MatGridListModule } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let itemService;

  beforeEach(() => {
    const itemServiceStub = {
      getItems() {}
    };
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatGridListModule],
      declarations: [ DashboardComponent ],
      providers:    [
        {provide: ItemService, UserClass: itemServiceStub}
       ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    itemService = TestBed.get(ItemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
