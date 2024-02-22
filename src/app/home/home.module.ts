import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { FooterComponent } from '../sections/footer/footer.component';
import { FooterModule } from '../sections/footer/footer.module';
import { SectionModule } from '../sections/section.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
     SectionModule,
      ],
  declarations: [HomePage ]
})
export class HomePageModule {}
