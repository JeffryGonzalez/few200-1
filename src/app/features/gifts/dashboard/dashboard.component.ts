import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardSummary } from '../models';
import { Store, select } from '@ngrx/store';
import { GiftsState } from '../reducer/list.reducer';
import { selectDashboardModel } from '../reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  model$: Observable<DashboardSummary>;
  constructor(private store: Store<GiftsState>) { }

  ngOnInit(): void {
    this.model$ = this.store.pipe(
      select(selectDashboardModel)
    );
  }

}
