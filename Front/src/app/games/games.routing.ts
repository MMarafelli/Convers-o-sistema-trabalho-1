import { Routes, RouterModule } from '@angular/router'
import { GamesListComponent } from './games-list/games-list.component';
import { GamesFormComponent } from './games-form/games-form.component';
import { GamesCrudComponent } from './games-crud/games-crud.component';

const GAMES_ROUTES: Routes = [
    { path: '', component: GamesCrudComponent },
    { path: ':id', component: GamesCrudComponent }

];
export const gamesRouting = RouterModule.forChild(GAMES_ROUTES);  