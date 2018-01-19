import { Component, OnInit } from '@angular/core';
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

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item) {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
  }

}
