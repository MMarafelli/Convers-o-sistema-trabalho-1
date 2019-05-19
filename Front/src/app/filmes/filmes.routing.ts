import { Routes, RouterModule } from '@angular/router'
import { FilmeListComponent } from './filme-list/filme-list.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';

const FILMES_ROUTES: Routes = [
    {
        path: '',
        component: FilmeListComponent
    },
    {
        path: '',
        component: FilmeFormComponent
    }


];
export const filmesRouting = RouterModule.forChild(FILMES_ROUTES);