import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Diary } from '../shared/diary.model';
import { DiaryService } from '../shared/diary.service';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})

export class DiaryDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService,
    private location: Location
  ) { }

  @Input() diary: Diary;

  ngOnInit() {
  }
  getDiary(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.diaryService.getDiary(id)
      .subscribe(diary => this.diary = diary);
  }

  save(): void {
     this.diaryService.updateDiary(this.diary)
      .subscribe();
   }

   goBack(): void {
     this.location.back();
   }

}
