import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { DiaryListComponent } from './diary-list.component';
import { FormsModule } from '@angular/forms';
import { DiaryService } from '../shared/diary.service';
import { Diary } from '../shared/diary.model';
import { RouterTestingModule } from '@angular/router/testing';
import { DiaryDetailComponent } from '../diary-detail/diary-detail.component';

describe('DiaryListComponent', () => {
  let component: DiaryListComponent;
  let componentItemService: DiaryService; // the actually injected service
  let diaryService: DiaryService; // the TestBed injected service
  let fixture: ComponentFixture<DiaryListComponent>;
  let diaryServiceStub;

  beforeEach(async(() => {
    diaryServiceStub = {
      getDiaries() {},
      addDiary(diary: Diary) {}
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ DiaryListComponent, DiaryDetailComponent ],
      providers: [
        {provide: DiaryService, useValue: diaryServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryListComponent);
    component = fixture.componentInstance;
    // ItemService actually injected into the component
    diaryService = fixture.debugElement.injector.get(DiaryService);
    componentItemService = diaryService;
    // ItemService from the root injector
    diaryService = TestBed.get(DiaryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
