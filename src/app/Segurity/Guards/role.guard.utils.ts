import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authService/authService.service';
import { JwtUtils } from '../../utils/jwtUtils';

const ROLE_REDIRECTS: Record<string, string> = {
  administrador: '/paginaPrincipalAdministrador',
  cliente: '/cliente/home',
  moderador: '/moderador/paginaPrincipalModerador',
  logistica: '/logistica/home'
};

export const checkRole = (expectedRole: string): boolean => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  const jwtUtils = inject(JwtUtils);

  const token = authService.getToken();
  if (!token || !authService.isAutenticated()) {
    authService.logout();
    return false;
  }

  const role = jwtUtils.getRole(token ?? '');
  if (role === expectedRole) {
    return true;
  }

  const redirectPath = role ? ROLE_REDIRECTS[role] ?? '/login' : '/login';
  router.navigate([redirectPath]);
  return false;
};
