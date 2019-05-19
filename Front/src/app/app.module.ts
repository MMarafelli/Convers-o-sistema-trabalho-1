import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { GamesComponent } from './games/games.component';
import { LanhouseComponent } from './lanhouse/lanhouse.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    GamesComponent,
    LanhouseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
