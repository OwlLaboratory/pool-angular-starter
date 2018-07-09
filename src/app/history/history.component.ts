import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'starter-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.styl']
})
export class HistoryComponent implements OnInit {
  @Output() onConvert = new EventEmitter<string>();

  entries: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  refresh() {
    const entries = localStorage.getItem('history');

    if (entries) {
      this.entries = JSON.parse(entries);
    } else {
      this.entries = [];
    }
  }

  clearHistory() {
    localStorage.removeItem('history');
    this.refresh();
  }

  display(textToConvert: string) {
    this.onConvert.emit(textToConvert);
  }
}
