import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


import { Diary } from '../shared/diary.model';
import { DiaryService } from '../shared/diary.service';


@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {

  selectedDiary: Diary;

  diaries: Diary[];

  constructor(private diaryService: DiaryService) { }

  ngOnInit() {
    this.getDiaries();
  }

  getDiaries(): void {
    this.diaryService.getDairies()
        .subscribe(diaries => {this.diaries = diaries; });
  }

  onSelect(diary: Diary): void {
    this.selectedDiary = diary;
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    const diary = { title: title, description: '' } as Diary;
    this.diaryService.addiary(diary)
      .subscribe(newDiary => {
        this.diaries.push(newDiary);
      });
  }

  delete(diary: Diary) {
    this.diaries = this.diaries.filter(i => i !== diary);
    this.diaryService.deleteDiary(diary).subscribe();
  }

}
