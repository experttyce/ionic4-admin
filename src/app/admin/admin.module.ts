import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomePage} from './home/home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    IonicModule,
  ]
})
export class AdminModule { }
