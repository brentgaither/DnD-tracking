import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserItemService } from '../shared/user-item.service';
import { UserItem } from '../shared/user-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-item-detail',
  templateUrl: './user-item-detail.component.html',
  styleUrls: ['./user-item-detail.component.css']
})
export class UserItemDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userItemService: UserItemService) { }

  @Output() savedItem: EventEmitter<any> = new EventEmitter();
  @Input() userItem: UserItem;

  ngOnInit() {
    console.log(this.userItem);
  }
  getUserItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userItemService.getUserItem(+id)
      .subscribe(userItem => this.userItem = userItem);
  }

  save(): void {
     this.userItemService.updateUserItem(this.userItem)
      .subscribe(userItem => this.savedItem.emit(userItem));
   }
}
