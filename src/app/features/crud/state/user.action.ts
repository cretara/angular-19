import { createAction, props } from '@ngrx/store';
import { User } from '../model';

const userActionConst = '[User] User Action ';

export const loadUsers = createAction(`${userActionConst} Load Users`);

export const loadUsersSuccess = createAction(`${userActionConst} Load Users Success`, props<{ users: User[] }>());
