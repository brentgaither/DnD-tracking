import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemDetailComponent } from './user-item-detail.component';

describe('UserItemDetailComponent', () => {
  let component: UserItemDetailComponent;
  let fixture: ComponentFixture<UserItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
