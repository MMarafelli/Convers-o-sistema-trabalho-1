import { Routes, RouterModule } from '@angular/router'
import { FilmeListComponent } from './filme-list/filme-list.component';

const FILMES_ROUTES: Routes = [
    {
        path: '',
        component: FilmeListComponent
    }

];
export const filmesRouting = RouterModule.forChild(FILMES_ROUTES);