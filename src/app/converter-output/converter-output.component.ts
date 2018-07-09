import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'starter-converter-output',
  templateUrl: './converter-output.component.html',
  styleUrls: ['./converter-output.component.styl']
})
export class ConverterOutputComponent implements OnInit {

  @Input()  textEncoded;

  constructor() { }

  ngOnInit() {
  }

}
