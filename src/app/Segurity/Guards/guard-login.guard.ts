import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtUtils } from '../../utils/jwtUtils';
import { AuthServiceService } from '../authService/authService.service';

export const guardLoginGuard: CanActivateFn = (route, state) => {
   
    const authService = inject(AuthServiceService);
    const router = inject(Router);  
    const token = authService.getToken();

    if (token) {
     
      const jwtUtils = inject(JwtUtils);
      if (jwtUtils.getRole(token) === 'administrador') {
        router.navigate(['/paginaPrincipalAdministrador']);

        authService.logout();
     
        return false;
      } else if (jwtUtils.getRole(token) === 'cliente') {
        router.navigate(['/cliente/home']);
        authService.logout();
        return false;
      }
    }

  return true;
};
