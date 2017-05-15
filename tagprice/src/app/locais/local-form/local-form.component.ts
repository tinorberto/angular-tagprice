import { LocaisComponent } from './../locais.component';
import { Local } from '../local';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.css']
})
export class LocalFormComponent implements OnInit {

  constructor() { }

  local : Local;

  ngOnInit() {
    this.local = new Local();
  }

  criarLocal(){
    console.log(this.local.idLocal);

  }

}
