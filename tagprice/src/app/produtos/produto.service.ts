import { Categoria } from './../categorias/categoria';
import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  produtos : Produto[] = [ new Produto({id: 1, nome: 'Arroz Integral', categoria : new Categoria({id: 1, nome: 'Alimentos'})}) ,
                      new Produto({id: 2, nome: 'Azeite Extra Virgem', categoria : new Categoria({id: 1, nome: 'Alimentos'})}) ,
                      new Produto({id: 3, nome: 'Milho de Pipoca', categoria : new Categoria({id: 1, nome: 'Alimentos'})}) ,
                       ];

  getAll(): Produto[]{
    return this.produtos;
  }

  addProduto(l :Produto){
    this.produtos.push(l);
  }

  getProdutobyId(id){
    console.log(this.produtos.find(item => item.id == id));
    return  this.produtos.find(item => item.id == id);
  }

  constructor() { }

}
