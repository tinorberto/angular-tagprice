import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';
import {Categoria} from './categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias : Categoria[];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.getAll();
  }

}
