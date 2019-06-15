import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,

  ],
  exports: [

  ]
})
export class PagesModule { }
