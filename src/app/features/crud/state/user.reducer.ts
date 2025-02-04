import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { loadUsers, loadUsersSuccess } from './user.action';

export const initialUserState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialUserState,
  on(loadUsers, (state) => {
    return {
      ...state,
      users: [],
    };
  }),
  on(loadUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users,
    };
  }),
);
