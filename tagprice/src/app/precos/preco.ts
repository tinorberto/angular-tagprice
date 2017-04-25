import { Produto } from './../produtos/produto';
import { Local } from './../locais/local';
import { Categoria } from './../categorias/categoria';
export class Preco {
id: number; 
categoria :Categoria;
local: Local;
produto : Produto;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

