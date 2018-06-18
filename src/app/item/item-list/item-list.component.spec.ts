import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';
import { Observable } from 'rxjs/Observable';
import { MatCardModule, MatListModule, MatIconModule, MatFormFieldModule } from '@angular/material';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let componentItemService: ItemService; // the actually injected service
  let itemservice: ItemService; // the TestBed injected service
  let fixture: ComponentFixture<ItemListComponent>;
  let itemServiceStub;

  beforeEach(async(() => {
    itemServiceStub = {
      getItems() {},
      addItem(item: Item) {}
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, MatCardModule, MatListModule, MatIconModule, MatFormFieldModule ],
      declarations: [ ItemListComponent, ItemDetailComponent ],
      providers: [
        {provide: ItemService, useValue: itemServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    // ItemService actually injected into the component
    itemservice = fixture.debugElement.injector.get(ItemService);
    componentItemService = itemservice;
    // ItemService from the root injector
    itemservice = TestBed.get(ItemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
