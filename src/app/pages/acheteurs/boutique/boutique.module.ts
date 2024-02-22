import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoutiquePageRoutingModule } from './boutique-routing.module';

import { BoutiquePage } from './boutique.page';
import { SectionModule } from 'src/app/sections/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoutiquePageRoutingModule,
    SectionModule
  ],
  declarations: [BoutiquePage]
})
export class BoutiquePageModule {}
