import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItemDetailComponent } from './item-detail.component';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';


describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let componentItemService: ItemService; // the actually injected service
  let itemservice: ItemService; // the TestBed injected service
  let fixture: ComponentFixture<ItemDetailComponent>;
  let itemServiceStub;

  beforeEach(async(() => {
    itemServiceStub = {
      getItems() {},
      updateItem(item: Item) {},
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ ItemDetailComponent ],
      providers: [
        {provide: ItemService, useValue: itemServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;

    // UserService actually injected into the component
    itemservice = fixture.debugElement.injector.get(ItemService);
    componentItemService = itemservice;
    // UserService from the root injector
    itemservice = TestBed.get(ItemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit saveItem', () => {
      component.saveItem.subscribe(g => {
         expect(g).toEqual(true);
      });
      component.save();
  });

});
