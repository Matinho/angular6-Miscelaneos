import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// utilizo ElementRef para poder utilizar el elemento llamado por la directiva
// HostListener se encarga de captar los eventos que pasan con el elemento
// Input recive parametros desde el html superior

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
   }

   @Input("appResaltado") nuevoColor: string; // le asigno a nuevoColor el contenido que viene de afuera

   @HostListener('mouseenter') mouseEntro() { // mouseEntro es el alias del listener
      this.resaltar(this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSalio() { // mouseEntro es el alias del listener
    this.resaltar( null );
 }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
 }

}
