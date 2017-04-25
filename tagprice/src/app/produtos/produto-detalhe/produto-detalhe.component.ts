import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

inscricao: Subscription;
idProduto : number;
produto : Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService : ProdutoService
  ) { }

  ngOnInit() {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.idProduto = id;
        this.produto = this.produtoService.getProdutobyId(id);
      }
     );
  }
}