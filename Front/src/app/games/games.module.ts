import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { gamesRouting } from './games.routing';
import { FormsModule } from '@angular/forms';
import { GamesService } from './games.service';
import { GamesFormComponent } from './games-form/games-form.component';
import { GamesCrudComponent } from './games-crud/games-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule, gamesRouting, FormsModule
  ],
  declarations: [GamesListComponent, GamesFormComponent, GamesCrudComponent, FilterPipe],
  providers: [GamesService]
})
export class GamesModule { }
