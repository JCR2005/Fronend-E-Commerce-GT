import { Routes } from '@angular/router';
import { authGuard } from './Segurity/Guards/auth.guard';
import { clienteGuard } from './Segurity/Guards/cliente.guard';
import { administradorGuard } from './Segurity/Guards/administrador.guard';
import { moderadorGuard } from './Segurity/Guards/moderador.guard';
import { logisticaGuard } from './Segurity/Guards/logistica.guard';

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
import { DetalleComprasComponent } from './paginaPrincipalCliente/articulosEnVenta/detalleCompras/detalleCompras.component';
import { LogisticaComponent } from './logistica/logistica.component';
import { VisualizarPedidosComponent } from './logistica/visualizar-pedidos/visualizar-pedidos.component';
import { ActualizarEstadoPedidoComponent } from './logistica/actualizar-estado-pedido/actualizar-estado-pedido.component';
import { HistoryNotificationsComponent } from './PaginaPrincipalAdministrador/Reports/historyNotifications/historyNotifications.component';
import { Top10ccmaevComponent } from './PaginaPrincipalAdministrador/Reports/top10ccmaev/top10ccmaev.component';
import { Top10CCMPComponent } from './PaginaPrincipalAdministrador/Reports/top10CCMP/top10CCMP.component';
import { ListEmpladosComponent } from './PaginaPrincipalAdministrador/Reports/listEmplados/listEmplados.component';
import { Top5CCMVComponent } from './PaginaPrincipalAdministrador/Reports/top5CCMV/top5CCMV.component';
import { Top10PMVComponent } from './PaginaPrincipalAdministrador/Reports/Top10PMV/Top10PMV.component';
import { Top5CCMGComponent } from './PaginaPrincipalAdministrador/Reports/Top5CCMG/Top5CCMG.component';

export const routes: Routes = [
  
    {path: '', component: PaginaPrincipalComponent,canActivate: [guardLoginGuard]},
    {path: 'paginaPrincipal', component: PaginaPrincipalComponent,canActivate: [guardLoginGuard]},
    {path: 'login', component: LoginComponent, canActivate: [guardLoginGuard]},
    {path: 'paginaPrincipalAdministrador', component: PaginaPrincipalAdministradorComponent,canActivate: [authGuard, administradorGuard]}, 
    {path: 'registroCliente', component: RegistroClienteComponent, canActivate: [guardLoginGuard]},
    {path: 'cliente/home', component: PaginaPrincipalClienteComponent, canActivate: [authGuard, clienteGuard]},
    {path: 'administración/registroEmpleado', component: RegistroEmpleadoComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'cliente/portalDeVentas', component: ArticuloAVenderComponent,canActivate: [authGuard, clienteGuard]},
    {path: 'cliente/publicarArticulo', component: CrearArticuloVentaComponent, canActivate: [authGuard, clienteGuard]},
    {path: 'cliente/mis-publicaciones', component: VerMisArticuloPublicadosComponent,   canActivate: [authGuard, clienteGuard]},
    {path: 'moderador/paginaPrincipalModerador', component: PaginaPrincipalModeradorComponent, canActivate: [authGuard, moderadorGuard]},
    {path: 'moderador/procesarSolicitudVenta', component: solicitudArticulosComponent, canActivate: [authGuard, moderadorGuard]},
    {path: 'moderador/verificacion-articulo/:id', component: VerificacionArticulosComponent, canActivate: [authGuard, moderadorGuard]},
    {path: 'cliente/portalDeCompras', component: ArticulosEnVentaComponent, canActivate: [authGuard, clienteGuard]},
    {path: 'cliente/compra-articulo/:id', component: CompraArticuloComponent, canActivate: [authGuard, clienteGuard]},
    {path: 'cliente/mi-carreta', component: CarrteaComponent, canActivate: [authGuard, clienteGuard]  },
    {path: 'cliente/detalle-compras', component: DetalleComprasComponent, canActivate: [authGuard, clienteGuard]  },
    {path: 'logistica/home', component: LogisticaComponent, canActivate: [authGuard, logisticaGuard]  },
    {path: 'logistica/visualizar-pedidos', component: VisualizarPedidosComponent, canActivate: [authGuard, logisticaGuard]  },
    {path: 'logistica/actualizar-estado-pedido', component: ActualizarEstadoPedidoComponent, canActivate: [authGuard, logisticaGuard]  },
    {path: 'administración/reportes/historial-de-notificaciones', component: HistoryNotificationsComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administración/reportes/top-10-clientes-con-mas-articulos-en-venta', component: Top10ccmaevComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administracion/reportes/top-10-clientes-con-mas-pedidos', component: Top10CCMPComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administracion/reportes/historial-empleados', component: ListEmpladosComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administracion/reportes/top-5-clientes-con-mas-compras-venta', component: Top5CCMVComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administracion/reportes/top-10-productos-mas-vendidos', component: Top10PMVComponent, canActivate: [authGuard, administradorGuard]},
    {path: 'administración/reportes/top-5-clientes-con-mas-ganancias', component: Top5CCMGComponent, canActivate: [authGuard, administradorGuard]},
];
    