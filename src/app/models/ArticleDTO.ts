export interface ArticleDTO {
  idArticulo: number;
  nombre: string;
  nombreCliente: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagenB64: string;
  categorias: number[];
  nombresCategorias: string[];
  estado: string;
  fecha: string;
  estatus: Estatus;
}

export enum Estatus {
  revisando = 'revisando',
  aprobado = 'aprobado',
  rechazado = 'rechazado'
}
