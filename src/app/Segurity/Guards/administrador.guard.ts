import { CanActivateFn } from '@angular/router';
import { checkRole } from './role.guard.utils';

export const administradorGuard: CanActivateFn = () => checkRole('administrador');
