import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadmeComponent} from './readme/readme.component';
import {ConverterComponent} from './converter/converter.component';

const routes: Routes = [
  {
    path: '',
    component: ConverterComponent
  },
  {
    path: 'readme',
    component: ReadmeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
