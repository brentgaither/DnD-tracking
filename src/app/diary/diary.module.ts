import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './shared/diary.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ],
  declarations: [
    DiaryDetailComponent,
    DiaryListComponent],
    providers: [DiaryService]
})
export class DiaryModule { }
