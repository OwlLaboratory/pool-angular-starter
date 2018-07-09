import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryComponent} from '../history/history.component';

@Component({
  selector: 'starter-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.styl']
})
export class ConverterComponent implements OnInit {

  constructor() { }


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
