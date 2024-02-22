import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordPageRoutingModule } from './dashbord-routing.module';

import { DashbordPage } from './dashbord.page';
import { SectionModule } from 'src/app/sections/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordPageRoutingModule,
    SectionModule,

  ],
  declarations: [DashbordPage]
})
export class DashbordPageModule {}
