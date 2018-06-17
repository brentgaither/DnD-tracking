import { TestBed, inject, async } from '@angular/core/testing';

import { DiaryService } from './diary.service';
import { Diary } from './diary.model';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DiaryDetailComponent } from '../diary-detail/diary-detail.component';
import { DiaryListComponent } from '../diary-list/diary-list.component';
import { MaterialModule } from '../../material/material.module';

describe('DiaryService', () => {
  let diaryServiceStub;

  beforeEach(async(() => {
  diaryServiceStub = {
    getDiaries() {},
    addDiary(diary: Diary) {}
  };
  TestBed.configureTestingModule({
    imports: [ FormsModule, RouterTestingModule, MaterialModule ],
    declarations: [ DiaryDetailComponent, DiaryListComponent ],
    providers: [
      {provide: DiaryService, useValue: diaryServiceStub}
    ]
  })
  .compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaryService]
    });
  });

  it('should be created', inject([DiaryService], (service: DiaryService) => {
    expect(service).toBeTruthy();
  }));
});
