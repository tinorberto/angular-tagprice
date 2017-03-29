import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-local-detalhe',
  templateUrl: './local-detalhe.component.html',
  styleUrls: ['./local-detalhe.component.css']
})
export class LocalDetalheComponent implements OnInit {

inscricao: Subscription;
idLocal : number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.idLocal = id;
    }
     );
  }
}
