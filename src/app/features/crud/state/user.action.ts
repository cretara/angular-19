import { createAction } from '@ngrx/store';

const userActionConst = '[User] User Action ';

export const loadUsers = createAction(`${userActionConst} Load Users`);
