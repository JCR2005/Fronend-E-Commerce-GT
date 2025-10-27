import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { AuthServiceService } from './authService/authService.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthServiceService);
  const token = authService.getToken();
console.log('Token usado en petición:', token);

  if (token) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(authReq);
  }

  return next(req);
};