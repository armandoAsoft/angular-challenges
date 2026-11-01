import {
  provideHttpClient,
  withInterceptors,
  withXhr,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr(), withInterceptors([loaderInterceptor])),
  ],
};
