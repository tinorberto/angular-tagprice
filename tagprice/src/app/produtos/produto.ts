import { Categoria } from './../categorias/categoria';
export class Produto {
  id: number; 
  nome: string;
  categoria : Categoria

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
