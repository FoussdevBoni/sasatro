import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SirenService {

  private siren!: string;

  constructor() { }

  // enregistrer le numéro SIREN à partir d'un tableau de chiffres
  setSIREN(sirenArray: number[]) {
    // concaténer les chiffres avec un séparateur
    this.siren = sirenArray.join('-');
  }

  // récupérer le numéro SIREN sous forme de chaîne
  getSIREN() {
    return this.siren;
  }
}
