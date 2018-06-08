import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from '../app/components/usuario/usuario.component';

import { USUARIO_ROUTES } from '../app/components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES// aca van las rutas hijas
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
