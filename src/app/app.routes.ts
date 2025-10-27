import { Routes } from '@angular/router';
import { authGuard } from './Segurity/Guards/auth.guard';

import { PaginaPrincipalComponent } from './PaginaPrincipal/PaginaPrincipal.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalAdministradorComponent } from './PaginaPrincipalAdministrador/PaginaPrincipalAdministrador.component';
import { guardLoginGuard } from './Segurity/Guards/guard-login.guard';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { PaginaPrincipalClienteComponent } from './paginaPrincipalCliente/paginaPrincipalCliente.component';
import { RegistroEmpleadoComponent } from './PaginaPrincipalAdministrador/registroEmpleado/registroEmpleado.component';
import { CrearArticuloVentaComponent } from './paginaPrincipalCliente/ArticuloAVender/crear-articulo-para-vender/CrearArticuloVenta.component';
import { ArticuloAVenderComponent } from './paginaPrincipalCliente/ArticuloAVender/ArticuloAVender.component';
import { VerMisArticuloPublicadosComponent } from './paginaPrincipalCliente/ArticuloAVender/ver-mis-articulo-publicados/ver-mis-articulo-publicados.component';
import { PaginaPrincipalModeradorComponent } from './PaginaPrincipalModerador/pagina-principal-moderador/pagina-principal-moderador.component';
import { solicitudArticulosComponent } from './PaginaPrincipalModerador/SolicitudArticulos/solicitudArticulos.component';
import { VerificacionArticulosComponent } from './PaginaPrincipalModerador/verificacion-articulos/verificacion-articulos.component';
import { ArticulosEnVentaComponent } from './paginaPrincipalCliente/articulosEnVenta/articulosEnVenta.component';
import { CompraArticuloComponent } from './paginaPrincipalCliente/articulosEnVenta/compraArticulo/compraArticulo.component';
import { CarrteaComponent } from './paginaPrincipalCliente/articulosEnVenta/carrtea/carrtea.component';
import { HistoryNotificationsComponent } from './PaginaPrincipalAdministrador/Reports/historyNotifications/historyNotifications.component';
import { Top10ccmaevComponent } from './PaginaPrincipalAdministrador/Reports/top10ccmaev/top10ccmaev.component';
import { Top10CCMPComponent } from './PaginaPrincipalAdministrador/Reports/top10CCMP/top10CCMP.component';

export const routes: Routes = [
  
    {path: '', component: PaginaPrincipalComponent,canActivate: [guardLoginGuard]},
    {path: 'paginaPrincipal', component: PaginaPrincipalComponent,canActivate: [guardLoginGuard]},
    {path: 'login', component: LoginComponent, canActivate: [guardLoginGuard]},
    {path: 'paginaPrincipalAdministrador', component: PaginaPrincipalAdministradorComponent,canActivate: [authGuard]}, 
    {path: 'registroCliente', component: RegistroClienteComponent, canActivate: [guardLoginGuard]},
    {path: 'cliente/home', component: PaginaPrincipalClienteComponent, canActivate: [authGuard]},
    {path: 'administración/registroEmpleado', component: RegistroEmpleadoComponent, canActivate: [authGuard]},
    {path: 'cliente/portalDeVentas', component: ArticuloAVenderComponent},
    {path: 'cliente/publicarArticulo', component: CrearArticuloVentaComponent},
    {path: 'cliente/mis-publicaciones', component: VerMisArticuloPublicadosComponent},
    {path: 'moderador/paginaPrincipalModerador', component: PaginaPrincipalModeradorComponent},
    {path: 'moderador/procesarSolicitudVenta', component: solicitudArticulosComponent},
    {path: 'moderador/verificacion-articulo/:id', component: VerificacionArticulosComponent},
    {path: 'cliente/portalDeCompras', component: ArticulosEnVentaComponent},
    {path: 'cliente/compra-articulo/:id', component: CompraArticuloComponent},
    {path: 'cliente/mi-carreta', component: CarrteaComponent},
    {path: 'administración/reportes/historial-de-notificaciones', component: HistoryNotificationsComponent, canActivate: [authGuard]},
    {path: 'administración/reportes/top-10-clientes-con-mas-articulos-en-venta', component: Top10ccmaevComponent, canActivate: [authGuard]},
    {path: 'administracion/reportes/top-10-clientes-con-mas-pedidos', component: Top10CCMPComponent, canActivate: [authGuard]},
];
