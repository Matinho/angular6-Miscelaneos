import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    // con parent tomo los parametros que vienen del padre
    this.route.parent.params.subscribe( parametros => {
      console.log('Ruta Hija - Usuario Nuevo');
      console.log(parametros);
    });
   }


  ngOnInit() {
  }

}
