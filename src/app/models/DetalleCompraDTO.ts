export interface DetalleCompraDTO {
  precioTotal: number;
  fechaEntrega: string;
  nombreArticulo: string;
  cantidad: number;
  precioUnitario: number;
  estado?: string;
}
