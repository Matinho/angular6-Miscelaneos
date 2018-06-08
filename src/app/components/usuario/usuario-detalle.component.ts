import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    // con parent tomo los parametros que vienen del padre
    this.route.parent.params.subscribe( parametros => {
      console.log('Ruta Hija - Usuario Detalle');
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
