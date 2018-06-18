import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { ActivatedRoute } from '@angular/router';
import { UserItem } from '../shared/user-item.model';
import { UserItemService } from '../shared/user-item.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  selectedUserItem: UserItem;

  userItems: UserItem[];
  weight: number;
  constructor(
    private route: ActivatedRoute,
    private userItemService: UserItemService) { }
  ngOnInit() {
    this.getItems();
  }
  // Event emitted from user item detail
  itemSaved() {
    this.calculateWeight();
  }

  calculateWeight(): void {
    this.weight = this.userItems.reduce((sum, userItem) => sum + (userItem.item.weight * (userItem.quantity ? userItem.quantity : 0)), 0);
  }

  getItems(): void {
    this.userItemService.getUserItems()
        .subscribe(userItems => {this.userItems = userItems; this.calculateWeight(); this.selectedUserItem = userItems[0]; });
  }

  onSelect(userItem: UserItem): void {
    this.selectedUserItem = userItem;
  }

  itemSelected(item): void {
    this.add(item);
  }

  add(item: Item): void {
    if (!item) { return; }
    const userItem = { quantity: 1, itemId: item.id, item: item } as UserItem;
    this.userItemService.addUserItem(userItem)
      .subscribe(newItem => {
         this.calculateWeight();
         newItem.item = item;
         this.userItems.push(newItem);
      });
  }

  delete(userItem: UserItem) {
    this.userItems = this.userItems.filter(i => i !== userItem);
    this.userItemService.deleteUserItem(userItem).subscribe();
    this.calculateWeight();
  }

}
