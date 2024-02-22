
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 categories =  [
  { name: "Agriculture", route: "/agriculture" },
  { name: "Biotechnologie", route: "/biotechnologie" },
  { name: "Produits aux entreprises", route: "/produits-entreprises" },
  { name: "Technologie propre", route: "/technologie-propre" },
  { name: "Ordinateurs et périphériques", route: "/ordinateurs-peripheriques" },
  { name: "Construction", route: "/construction" },
  { name: "Conseils", route: "/conseils" },
  { name: "Produits de consommation", route: "/produits-consommation" },
  { name: "Services aux consommateurs", route: "/services-consommateurs" },
  { name: "Marketing numérique", route: "/marketing-numerique" },
  { name: "Éducation", route: "/education" },
  { name: "Électronique/Instrumentation", route: "/electronique-instrumentation" },
  { name: "Mode", route: "/mode" },
  { name: "Services financiers", route: "/services-financiers" },
  { name: "Technologie financière", route: "/technologie-financiere" },
  { name: "Alimentation et boissons", route: "/alimentation-boissons" },
  { name: "Jeux vidéo", route: "/jeux-video" },
  { name: "Services de santé", route: "/services-sante" },
  { name: "Industrie/Énergie", route: "/industrie-energie" },
  { name: "Internet/Services Web", route: "/internet-services-web" },
  { name: "Services informatiques", route: "/services-informatiques" },
  { name: "Juridique", route: "/juridique" },
  { name: "Art de vivre", route: "/art-de-vivre" },
  { name: "Marine", route: "/marine" },
  { name: "Secteur maritime/fret", route: "/secteur-maritime-fret" },
  { name: "Marketing/Publicité", route: "/marketing-publicite" },
  { name: "Médias et loisirs", route: "/medias-loisirs" },
  { name: "Dispositifs et équipements médicaux", route: "/equipements-medicaux" },
  { name: "Téléphonie mobile", route: "/telephonie-mobile" },
  { name: "Réseaux et équipements", route: "/reseaux-equipements" },
  { name: "Autre", route: "/autre" }
];
  constructor() {

  }
}
