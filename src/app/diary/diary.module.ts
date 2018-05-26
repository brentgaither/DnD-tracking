import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './shared/diary.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
  ],
  declarations: [
    DiaryDetailComponent,
    DiaryListComponent],
    providers: [DiaryService]
})
export class DiaryModule { }
