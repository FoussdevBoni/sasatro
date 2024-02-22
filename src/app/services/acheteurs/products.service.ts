import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 1
    },
     {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 2
    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 3
    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 4

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 5

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 6

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 7

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 8

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
      id: 9

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.hydroquebec.com/data/metas/fb/mc-produits-electronique-2016L668-shut-226338589.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
            id: 10

    }, {
      title: 'Montre de dernière génération',
      image: 'https://www.cdiscount.com/pdt2/3/3/5/1/550x550/rme2009261957335/rw/montre-homme-montre-bracelet-homme-affaires-quartz.jpg',
      reviews: 25,
      comparisonPrice: '25 $',
      actualPrice: '500$',
            id: 11

    },
    // Ajoutez d'autres produits selon vos besoins
  ];
  constructor() { }

   getProducts() {
    return this.products;
  }

  getProductById(id: any) {
    this.products.map((product: any)=>{
      if ( product.id.toString() ===id) {
         return product
      }
    })
  }
}
