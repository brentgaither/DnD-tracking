import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './shared/diary.service';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [
    DiaryDetailComponent,
    DiaryListComponent],
    providers: [DiaryService]
})
export class DiaryModule { }
