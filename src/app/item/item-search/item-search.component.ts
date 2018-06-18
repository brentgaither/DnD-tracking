import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  private searchTerms = new Subject<string>();
  items$: Observable<Item[]>;
  selectedValue: string;
  items: Item[];

  constructor(private itemService: ItemService) { }
 // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.itemService.getItems()
    .subscribe(items => {this.items = items; });
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }

  // Send off an event of the item that was just selected
  public itemSelectedEvent(item) {
    this.selectedItem.emit(this.items.find(x => x.name === item));
  }
}
