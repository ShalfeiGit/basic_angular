import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ru_RU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { Post2Interceptor } from './post2/post2.interceptor';

registerLocaleData(ru);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzI18n(ru_RU), importProvidersFrom(FormsModule,), provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi()), { provide: HTTP_INTERCEPTORS, useClass: Post2Interceptor, multi: true }]
};
