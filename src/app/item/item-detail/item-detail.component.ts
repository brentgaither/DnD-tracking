import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  @Input() item: Item;
  @Output() saveItem = new EventEmitter<boolean>();

  ngOnInit() {
  }
  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  save(): void {
     this.itemService.updateItem(this.item);
     this.saveItem.emit(true);
   }

   goBack(): void {
     this.location.back();
   }

}
