import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ConverterInputComponent } from './converter-input/converter-input.component';
import { ConverterOutputComponent } from './converter-output/converter-output.component';
import { HistoryComponent } from './history/history.component';
import { Base64Pipe } from './base64.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterInputComponent,
    ConverterOutputComponent,
    HistoryComponent,
    Base64Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
