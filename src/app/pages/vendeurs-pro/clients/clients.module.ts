import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPageRoutingModule } from './clients-routing.module';

import { ClientsPage } from './clients.page';
import { SectionModule } from 'src/app/sections/section.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsPageRoutingModule,
    SectionModule
  ],
  declarations: [ClientsPage]
})
export class ClientsPageModule {}
