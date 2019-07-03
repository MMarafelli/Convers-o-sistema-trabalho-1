import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanHouseListComponent } from './lanhouse-list/lanhouse-list.component';
import { lanHouseRouting } from './lanhouse.routing';
import { FormsModule } from '@angular/forms';
import { LanHouseService } from './lanhouse.service';
import { LanHouseFormComponent } from './lanhouse-form/lanhouse-form.component';
import { LanHouseCrudComponent } from './lanhouse-crud/lanhouse-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule, lanHouseRouting, FormsModule
  ],
  declarations: [LanHouseListComponent, LanHouseFormComponent, LanHouseCrudComponent, FilterPipe],
  providers: [LanHouseService]
})
export class LanHouseModule { }
