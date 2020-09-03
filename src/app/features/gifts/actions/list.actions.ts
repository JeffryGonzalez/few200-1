import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducer/list.reducer';
let currentId = 0;

export const addedGiftsItem = createAction(
  '[gifts] gifts item added',
  ({ name,
    holiday,
    dateOfHoliday,
    needsGift,
    needsCard }: { name: string, holiday: string, dateOfHoliday: string, needsGift: boolean, needsCard: boolean }) => ({
      payload: {
        name, holiday, dateOfHoliday, needsGift, needsCard,
        id: 'TEMP' + currentId++
      } as ListEntity
    })
);

export const addedGiftsItemSucceeded = createAction(
  '[gifts] added media item succeeded',
  props<{ tempId: string, payload: ListEntity }>()
);

