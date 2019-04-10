import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ba-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pages = 0;
  @Output() change = new EventEmitter();
  currentPage = 1;
  pageList;

  constructor() { }

  ngOnInit() {
    this.makePageList(this.pages);
  }

  ngOnChange(changes: SimpleChanges) {
    console.log(changes)
    if (changes.pages && changes.pages.previousValue !== changes.pages.currentValue) {
      this.makePageList(changes.pages.currentValue);
    }
  }

  makePageList(value) {
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }
    this.pageList = new Array(value).fill(0).map((_, i) => i + 1);
  }

  goTo(page: number) {
    this.currentPage = page;
    this.change.emit({
      page,
    });
  }

}
