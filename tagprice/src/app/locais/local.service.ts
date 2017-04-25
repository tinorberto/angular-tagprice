import { Local } from './local';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  locais : Local[] = [ new Local({id: 1, nome: 'Supermercado Brasil'}),
                      new Local({id: 2, nome: 'Supermercado BH'}),
                      new Local({id: 3, nome: 'Supermercado EPA'})  ];

  getAll(): Local[]{
    return this.locais;
  }

  addLocal(l :Local){
    this.locais.push(l);
  }

  getLocalbyId(id){
    console.log(this.locais.find(item => item.id == id));
    return  this.locais.find(item => item.id == id);
  }

  constructor() { }

}
