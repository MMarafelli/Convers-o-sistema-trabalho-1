import { Routes, RouterModule } from '@angular/router'
import { LanHouseListComponent } from './lanHouse-list/lanHouse-list.component';
import { LanHouseFormComponent } from './lanhouse-form/lanhouse-form.component';
import {LanHouseCrudComponent } from './lanhouse-crud/lanhouse-crud.component';

const LANHOUSE_ROUTES: Routes = [
    { path: '', component: LanHouseCrudComponent },
    { path: ':id', component:LanHouseCrudComponent }

];
export const lanHouseRouting = RouterModule.forChild(LANHOUSE_ROUTES);  