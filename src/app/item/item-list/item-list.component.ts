import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Item } from '..//shared/item.model';
import { ItemService } from '../shared/item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  selectedItem: Item;

  items: Item[];
  weight: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  // Event emitted from item detail
  saveItem() {
    this.calculateWeight();
  }

  calculateWeight(): void {
    this.weight = this.items.reduce((sum, item) => sum + (item.weight * (item.quantity ? item.quantity : 0)), 0);
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => {this.items = items; this.calculateWeight(); this.selectedItem = items[0]; });
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const item = { name: name, weight: 0, quantity: 0, description: 'add a description' } as Item;
    this.itemService.addItem(item)
      .subscribe(newItem => {
        this.items.push(newItem); this.calculateWeight();
      });
  }

  delete(item: Item) {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
    this.calculateWeight();
  }

}
