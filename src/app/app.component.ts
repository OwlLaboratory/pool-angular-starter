import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryComponent} from './history/history.component';

@Component({
  selector: 'starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'starter';

  textEncoded: string;
  @ViewChild('history') historyChild: HistoryComponent;


  display(textToConvert: string) {
    this.textEncoded = btoa(textToConvert);
    this.saveInHistory(textToConvert);
  }

  saveInHistory(textToConvert: string) {
    let entries = [];

    const lastSave = localStorage.getItem('history');

    if (lastSave) {
      entries = JSON.parse(lastSave);
    }

    entries.unshift(textToConvert);

    localStorage.setItem('history', JSON.stringify(entries));

    this.historyChild.refresh();
  }

  ngOnInit(): void {
    this.historyChild.refresh();
  }
}
