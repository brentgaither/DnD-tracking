import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemService } from './shared/item.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserItemComponent } from './user-item/user-item.component';
import { UserItemService } from './shared/user-item.service';
import { MaterialModule } from '../material/material.module';
import { ItemSearchComponent } from './item-search/item-search.component';
import { UserItemDetailComponent } from './user-item-detail/user-item-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    ItemDetailComponent,
    ItemListComponent,
    UserItemComponent,
    ItemSearchComponent,
    UserItemDetailComponent],
    providers: [ItemService, UserItemService]
})
export class ItemModule { }
