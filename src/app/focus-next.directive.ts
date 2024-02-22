import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[focusNext]'
})
export class FocusNextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // obtenir la valeur de l'input
    const value = this.el.nativeElement.value;
    // vérifier si la valeur est un chiffre entre 0 et 9
    if (/^[0-9]$/.test(value)) {
      // obtenir le prochain élément frère
      const next = this.el.nativeElement.nextElementSibling;
      // vérifier si le prochain élément existe et est un input
      if (next && next.tagName === 'INPUT') {
        // changer le focus vers le prochain élément
        this.renderer.selectRootElement(next).focus();
      }
    }
  }

}
