import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [AdminHeaderComponent, PublicHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AdminHeaderComponent, PublicHeaderComponent
  ]
})
export class ComponentsModule { }
