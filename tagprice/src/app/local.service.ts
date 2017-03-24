import { Local } from './local';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  locais : Local[] = [ new Local({id: 1, nome: 'Supermercado Brasil'}),
                      new Local({id: 2, nome: 'Supermercado BH'})  ];

  getAll(): Local[]{
    return this.locais;
  }

  constructor() { }

}
