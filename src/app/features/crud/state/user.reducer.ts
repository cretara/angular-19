import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { loadUsers } from './user.action';

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
);
