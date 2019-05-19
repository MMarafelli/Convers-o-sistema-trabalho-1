import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'filmes',
        component: FilmeFormComponent
    }

];
export const RoutingModule = RouterModule.forRoot(routes);