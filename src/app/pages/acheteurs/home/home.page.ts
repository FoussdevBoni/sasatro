import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/global/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
    userData: any;

   categories = [
    { name: 'Promo', route: '/promo' },
    { name: 'Bricolage', route: '/bricolage' },
    { name: 'Informatique', route: '/informatique' },
    { name: 'Electroménager', route: '/electromenager' },
    { name: 'Meuble Déco', route: '/meuble-deco' },
    { name: 'Literie', route: '/literie' },
    { name: 'Sport', route: '/sport' },
    { name: 'Jardin Animalerie', route: '/jardin-animalerie' },
    { name: 'TV Son Photo', route: '/tv-son-photo' },
    { name: 'Téléphonie', route: '/telephonie' },
    { name: 'Reconditionné', route: '/reconditionne' },
    { name: 'Jeux Vidéo', route: '/jeux-video' },
    { name: 'Beauté', route: '/beaute' },
    { name: 'Mode Bijoux', route: '/mode-bijoux' },
    { name: 'Jouets', route: '/jouets' },
    { name: 'Bébé', route: '/bebe' },
    { name: 'Auto Moto', route: '/auto-moto' },
    { name: 'La Cave', route: '/la-cave' }
];

  selectedSegment: string = 'promo';
  seller: any
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

   scrollSegment(direction: number) {
    const currentIndex = this.categories.findIndex(cat => cat.route === this.selectedSegment);
    const newIndex = currentIndex + direction;
     alert(direction)
    if (newIndex >= 0 && newIndex < this.categories.length) {
      this.selectedSegment = this.categories[newIndex].route;
    }
  }
  constructor(public userService: UserService) {
    userService.getSeller().subscribe(seller=>{
      console.log(seller)
      this.seller= seller
    })
  }


  ngOnInit() {
    return null
  }

}
