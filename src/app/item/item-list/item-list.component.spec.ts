import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';
import { Observable } from 'rxjs/Observable';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let componentItemService: ItemService; // the actually injected service
  let itemservice: ItemService; // the TestBed injected service
  let fixture: ComponentFixture<ItemListComponent>;
  let itemServiceStub;
  const testItem = { id: 11, name: 'dagger', description: null, weight: 0, quantity: 0 };

  beforeEach(async(() => {
    itemServiceStub = {
      getItems() {},
      // addItem(item: Item) {},
      // addItem(item: Item) { return new Observable<Item>()};
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
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

  it('should calculate weight', () => {

    component.items = [
      { id: 11, name: 'Abacus', description: 'For counting of course!', weight: 10, quantity: 1 },
      { id: 12, name: 'Backpack', description: 'To hold all your things!', weight: 1, quantity: 7 },
      { id: 13, name: 'Candle', description: 'Its always nice to see', weight: .25, quantity: 4 },
    ];
    component.calculateWeight();
    expect(component.weight).toEqual(18);
  });

  it('should add new item', () => {
    component.items = [
      { id: 11, name: 'Abacus', description: 'For counting of course!', weight: 10, quantity: 1 },
      { id: 12, name: 'Backpack', description: 'To hold all your things!', weight: 1, quantity: 7 },
      { id: 13, name: 'Candle', description: 'Its always nice to see', weight: .25, quantity: 4 },
    ];
    component.add('dagger');
    expect(component.items[0]).toEqual(this.testItem);
  });


});
