import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemService } from '../shared/item.service';
import { MockHttpClient } from '../../testing/mock-http-client';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ ItemListComponent, ItemDetailComponent ],
      providers: [
        ItemService,
        {provide: HttpClient, UserClass: MockHttpClient}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
