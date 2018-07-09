import { Component } from '@angular/core';

@Component({
  selector: 'starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'starter';

  textInput: string;
  textEncoded: string;

  display() {
    this.textEncoded = btoa(this.textInput);
  }
}
