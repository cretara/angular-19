import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { userReducer } from './features/crud/state/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as userEffects from './features/crud/state/user.effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'users', reducer: userReducer }),
    provideStoreDevtools({
      maxAge: 30,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    provideEffects(userEffects),
  ],
};
