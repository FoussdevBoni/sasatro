import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChackoutPageRoutingModule } from './chackout-routing.module';

import { ChackoutPage } from './chackout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChackoutPageRoutingModule
  ],
  declarations: [ChackoutPage]
})
export class ChackoutPageModule {}
