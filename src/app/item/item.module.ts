import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';

import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemService } from './shared/item.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [
    ItemDetailComponent,
    ItemListComponent],
    providers: [ItemService]
})
export class ItemModule { }
