import { Component, OnInit } from '@angular/core';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';

@Component({
  selector: 'app-boutique-details-item',
  templateUrl: './boutique-details-item.component.html',
  styleUrls: ['./boutique-details-item.component.scss'],
})
export class BoutiqueDetailsItemComponent  implements OnInit {
   menuItems = [
    {
      route:'description',
      text: 'Description'

    },
     {
      route: 'catalogue',
      text: 'Catalogue'
     },
     {
      route:  'categories',
      text: 'Catégories'
     },
     {
      route:   'views',
      text: 'Avis des clients'
     },
    {
     route: 'payWays',
     text: 'Méthodes de payement'
    },
    {
      route: 'promo',
      text: 'Promotions et offres spéciales'
    }
   ]

   products = [
    {
      name: 'Produit 1',
      image: 'https://www.cdiscount.com/pdt2/3/3/5/2/700x700/rme2009261957335/rw/montre-homme-montre-bracelet-homme-affaires-quartz.jpg',
      price: 25.99,
      rating: 4.5
    },
    {
      name: 'Produit 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReqWr1tBzn2jmMjhijqWgWMVDb2cxYNDfvttjljhNtQHF-Q39CzOpq8LiYHUWPihNknQ&usqp=CAU',
      price: 39.99,
      rating: 3.8
    },
     {
      name: 'Produit 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReqWr1tBzn2jmMjhijqWgWMVDb2cxYNDfvttjljhNtQHF-Q39CzOpq8LiYHUWPihNknQ&usqp=CAU',
      price: 39.99,
      rating: 3.8
    },
     {
      name: 'Produit 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReqWr1tBzn2jmMjhijqWgWMVDb2cxYNDfvttjljhNtQHF-Q39CzOpq8LiYHUWPihNknQ&usqp=CAU',
      price: 39.99,
      rating: 3.8
    },
    // Ajoutez d'autres produits selon vos besoins
  ];
   checkedItem = 'catalogue'
  constructor(
    public globalePropsService: GlobalePropsService
  ) {
     globalePropsService.currentProfile = 'visitor'
   }

  ngOnInit() {
    return null
  }

  checkItem(item:  any){
    this.checkedItem = item
  }
}
