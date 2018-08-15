import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
  CharacterEditComponent
]
})
export class CharacterModule { }
