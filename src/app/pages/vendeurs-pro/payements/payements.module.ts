import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayementsPageRoutingModule } from './payements-routing.module';

import { PayementsPage } from './payements.page';
import { SectionModule } from 'src/app/sections/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayementsPageRoutingModule,
    SectionModule
  ],
  declarations: [PayementsPage]
})
export class PayementsPageModule {}
