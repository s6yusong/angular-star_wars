import { Action } from '@ngrx/store'

export const TOGGLE_VIEW = 'Toggle View';
export const CHANGE_SEARCH_KEY = 'Change Search Key';

export class ToggleView implements Action{
  readonly type = TOGGLE_VIEW;
  constructor(public payload: boolean) {}
}
export class ChangeSearchKey implements Action{
  readonly type = CHANGE_SEARCH_KEY;
  constructor(public payload: any) {}
}
export type ViewAction = ToggleView | ChangeSearchKey;
