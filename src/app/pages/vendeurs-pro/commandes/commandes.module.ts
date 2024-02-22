import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandesPageRoutingModule } from './commandes-routing.module';

import { CommandesPage } from './commandes.page';
import { SectionModule } from 'src/app/sections/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandesPageRoutingModule,
    SectionModule
  ],
  declarations: [CommandesPage]
})
export class CommandesPageModule {}
