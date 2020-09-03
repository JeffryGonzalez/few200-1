import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
export const featureName = 'mediaFeature';
import * as fromList from './list.reducer';
import * as models from '../models';
import { MediaListItem } from '../models';

export interface GiftState {
  list: fromList.GiftsState;
}

export const reducers: ActionReducerMap<GiftState> = {
  list: fromList.reducer
};

// SELECTORS

// 1. Feature Selector
const selectFeature = createFeatureSelector<GiftState>(featureName);
// 2. A Selector Per Branch
const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

// 3. Helpers (optional)
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.

// TODO: We need a selector that returns a MediaListItem[]
export const selectDashboardModel = createSelector(
  selectAllListItems,
  m => {
    return {
      numberOfCards: m.filter(b => b.needsCard && !b.hasCard).length,
      numberOfGifts: m.filter(b => b.needsGift && !b.hasGift).length,
      numberOfHolidays: m.filter(b => b.holiday).length
    } as models.DashboardSummary;
  }
);

