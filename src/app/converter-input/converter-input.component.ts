import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'starter-converter-input',
  templateUrl: './converter-input.component.html',
  styleUrls: ['./converter-input.component.styl']
})
export class ConverterInputComponent implements OnInit {
  textInput: string;

  @Output() onConvert = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  display() {
    this.onConvert.emit(this.textInput);
  }

}
