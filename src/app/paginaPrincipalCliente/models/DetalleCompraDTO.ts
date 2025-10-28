export interface DetalleCompraDTO {
  idCompra: number;
  fechaCompra: string;
  nombreArticulo: string;
  cantidad: number;
  precioUnitario: number;
  subtotal?: number;
  metodoPago?: string;
  estado?: string;
}
