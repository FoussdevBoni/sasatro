import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
   providers: [FooterComponent], // Ajoutez ceci si nécessaire

})
export class FooterComponent  implements OnInit {

  constructor() { }
   footer = null
  ngOnInit() {
    this.footer = null
  }

}
