import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './shared/diary.service';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    DiaryDetailComponent,
    DiaryListComponent],
    providers: [DiaryService]
})
export class DiaryModule { }
