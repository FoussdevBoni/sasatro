import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[maxlength]'
})
export class MaxLengthDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // obtenir la valeur de l'attribut maxlength
    const maxlength = this.el.nativeElement.getAttribute('maxlength');
    // obtenir la valeur de l'input
    const value = this.el.nativeElement.value;
    // vérifier si la valeur dépasse la longueur maximale
    if (value.length > maxlength) {
      // tronquer la valeur à la longueur maximale
      this.el.nativeElement.value = value.slice(0, maxlength);
      // déclencher l'évènement input pour mettre à jour le modèle
      this.el.nativeElement.dispatchEvent(new Event('input'));
    }
  }

}
