import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
export interface ListEntity {
  id: string;
  name: string;
  holiday: string;
  dateOfHoliday: string;
  needsGift: boolean;
  needsCard: boolean;
  hasGift: boolean;
  hasCard: boolean;
}

export interface GiftsState extends EntityState<ListEntity> {
}

export const adapter = createEntityAdapter<ListEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.addedGiftsItem, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.addedGiftsItemSucceeded, (s, a) => {
    const tempState = adapter.removeOne(a.tempId, s);
    return adapter.addOne(a.payload, tempState);
  }),
);

export function reducer(state: GiftsState = initialState, action: Action): GiftsState {
  return reducerFunction(state, action);
}



