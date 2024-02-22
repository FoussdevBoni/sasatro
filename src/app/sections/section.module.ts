import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsComponent } from '../items/product-details/product-details.component';
import { ProductItemComponent } from '../items/product-item/product-item.component';
import { ProductDetailsItemComponent } from '../items/product-details-item/product-details-item.component';
import { BoutiqueDetailsItemComponent } from '../items/boutique-details-item/boutique-details-item.component';
import { BoutiqueItemComponent } from '../items/boutique-item/boutique-item.component';
import { HeaderComponent } from './vendeurs-pro/header/header.component';
import { SidebarComponent } from './vendeurs-pro/sidebar/sidebar.component';
import { BottomBarComponent } from './vendeurs-pro/bottom-bar/bottom-bar.component';
import { ProductsComponent } from './acheteurs/products/products.component';
import { BannarComponent } from './acheteurs/bannar/bannar.component';
import { BoutiqueListComponent } from './acheteurs/boutique-list/boutique-list.component';
import { ProductsGridComponent } from './acheteurs/products-grid/products-grid.component';
import { Navbar1Component } from './acheteurs/navbar1/navbar1.component';
import { Header1Component } from './acheteurs/header1/header1.component';
import { MenuComponent } from './acheteurs/menu/menu.component';


@NgModule({
  declarations: [
   FooterComponent,
  ProductsComponent,
  ProductItemComponent,
  ProductDetailsItemComponent,
  BannarComponent,
  BoutiqueDetailsItemComponent,
  BoutiqueItemComponent,
  BoutiqueListComponent,
  ProductsGridComponent,
  HeaderComponent,
  SidebarComponent,
  BottomBarComponent,
  Navbar1Component,
  Header1Component,
  MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsItemComponent,
    BannarComponent,
    BoutiqueDetailsItemComponent,
    BoutiqueItemComponent,
    BoutiqueListComponent,
    ProductsGridComponent,
    HeaderComponent,
    SidebarComponent,
    BottomBarComponent,
    Navbar1Component,
      Header1Component,
      MenuComponent

  ]
})
export class SectionModule { }
