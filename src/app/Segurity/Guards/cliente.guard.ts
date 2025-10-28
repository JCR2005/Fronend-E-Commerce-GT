import { CanActivateFn } from '@angular/router';
import { checkRole } from './role.guard.utils';

export const clienteGuard: CanActivateFn = () => checkRole('cliente');