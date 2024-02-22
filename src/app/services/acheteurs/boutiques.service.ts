import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiquesService {
   boutiques = [
    {
      id: 1,
      nom: 'Ecologiste de Paris',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 2,
      nom: 'Alain Tech',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 3,
      nom: 'Bio de Landing',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },

      {
      id: 4,
      nom: 'Fath Biologiste',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 6,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 7,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 8,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 9,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 1,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
      {
      id: 1,
      nom: 'Boutique A',
      logo: 'chemin/vers/logo1.png',
      description: 'Description de la Boutique A.',
      localisation: 'Emplacement de la Boutique A',
      specialite: 'Spécialité de la Boutique A',
      note: 4.5,
    },
    // Ajoutez d'autres boutiques de la même manière
  ];
  constructor() {

  }

    getProducts() {
    return this.boutiques;
  }

  getProductById(id: any) {
    this.boutiques.map((boutique: any , index)=>{
      if (index.toString() ===id) {
         return boutique
      }
    })
  }
}
