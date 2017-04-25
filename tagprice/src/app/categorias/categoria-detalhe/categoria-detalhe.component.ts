import { CategoriaService } from '../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Categoria} from '../categoria';
@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit {


inscricao: Subscription;
idLocal : number;
categoria : Categoria;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService : CategoriaService
  ) { }

  ngOnInit() {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.idLocal = id;
        this.categoria = this.categoriaService.getLocalbyId(id);
      }
     );
  }
}
