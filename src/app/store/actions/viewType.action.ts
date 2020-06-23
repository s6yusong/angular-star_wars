import { Action } from '@ngrx/store'

export const TOGGLE_VIEW = 'Toggle View';

export class ToggleView implements Action{
  readonly type = TOGGLE_VIEW;
  constructor(public payload: boolean) {}
}
export type ViewTypeAction = ToggleView ;
