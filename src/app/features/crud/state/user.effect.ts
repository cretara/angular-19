import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, Observable, of, switchMap } from 'rxjs';
import { loadUsers, loadUsersSuccess } from './user.action';

export const loadUsersEffect = createEffect(
  ($actions = inject(Actions), userService = inject(UserService)): Observable<any> => {
    return $actions.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return userService.loadUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => {
            console.error('Error loading users', error);
            return of(EMPTY);
          }),
        );
      }),
    );
  },
  { functional: true },
);
