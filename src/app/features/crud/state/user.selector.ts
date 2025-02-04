import { UserState } from './user.state';
import { createSelector } from '@ngrx/store';

export const userSelector = (state: UserState) => state.users;

export const selectUser = createSelector(userSelector, (users) => users);
