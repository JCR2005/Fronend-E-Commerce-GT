import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from '../authService/authService.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);  
  if (!authService.isAutenticated()) {
    router.navigate(['/login']);
    return false;
  } 
  return true;
};
