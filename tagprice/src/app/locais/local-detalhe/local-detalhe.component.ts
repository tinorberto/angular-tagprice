import { LocalService } from '../local.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Local} from '../local';

@Component({
  selector: 'app-local-detalhe',
  templateUrl: './local-detalhe.component.html',
  styleUrls: ['./local-detalhe.component.css']
})
export class LocalDetalheComponent implements OnInit {

inscricao: Subscription;
idLocal : number;
local : Local;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localService : LocalService
  ) { }



  ngOnInit() {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        //this.idLocal = id;
        console.log(id);
         this.local = new Local();
        this.localService.getLocalbyId(id).subscribe(data => this.local = data);
      }
     );
  }
}
