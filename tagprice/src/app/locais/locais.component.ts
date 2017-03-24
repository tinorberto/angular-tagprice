import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';
import {Local}  from './../local';
@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {
  locais : Local[];

  constructor(private localService:LocalService) { }

  ngOnInit() {
    this.locais = this.localService.getAll();
  }

}
