import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GiftsComponent } from './gifts.component';
import { ListUpcomingComponent } from './list-upcoming/list-upcoming.component';
import { EntryComponent } from './entry/entry.component';
import { ListPastComponent } from './list-past/list-past.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { featureName } from '../media/reducers';
import { reducers } from 'src/app/reducers';
const routes: Routes = [
  {
    path: 'gifts',
    component: GiftsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'list-upcoming',
        component: ListUpcomingComponent
      },
      {
        path: 'entry',
        component: EntryComponent
      },
      {
        path: 'list-past',
        component: ListPastComponent
      }
    ]
  }
];

@NgModule({
  declarations: [GiftsComponent, DashboardComponent, ListPastComponent, ListUpcomingComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class GiftsModule { }
