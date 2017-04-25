import { Categoria } from './categoria';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriaService {

locais : Categoria[] = [ new Categoria({id: 1, nome: 'Alimentos'}),
                      new Categoria({id: 2, nome: 'Bebida'}),
                      new Categoria({id: 3, nome: 'Carnes'}),
                      new Categoria({id: 4, nome: 'Frios'}),
                      new Categoria({id: 5, nome: 'Frutas. verdutas e Legumes'}),
                      new Categoria({id: 6, nome: 'Higiene'}),
                      new Categoria({id: 7, nome: 'Limpeza'}),
                      new Categoria({id: 8, nome: 'Padaria'})];

  getAll(): Categoria[]{
    return this.locais;
  }

  addLocal(l :Categoria){
    this.locais.push(l);
  }

  getLocalbyId(id){
    console.log(this.locais.find(item => item.id == id));
    return  this.locais.find(item => item.id == id);
  }

  constructor() { }

}