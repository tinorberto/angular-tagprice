import { Local } from './local';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LocalService {

  urlRestService = "http://localhost:8080/tagprice/service/";
  locais :  Array<Local>;
/*  locais : Local[] = [ new Local({id: 1, nome: 'Supermercado Brasil'}),
                      new Local({id: 2, nome: 'Supermercado BH'}),
                      new Local({id: 3, nome: 'Supermercado EPA'})  */ 

  getAll() {
     //this.locais = new Array();
     return this.http.get(this.urlRestService+"local").map(res =>res.json());
  }

  addLocal(l :Local){
    this.locais.push(l);
  }

  getLocalbyId(id){
    return this.http.get(this.urlRestService+"local/"+id).map(res =>res.json());
  }

  constructor(private http:Http) { }

}
