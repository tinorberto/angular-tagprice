import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { CategoriaDetalheComponent } from './categorias/categoria-detalhe/categoria-detalhe.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PrecoDetalheComponent } from './precos/preco-detalhe/preco-detalhe.component';
import { PrecoFormComponent } from './precos/preco-form/preco-form.component';
import { PrecosComponent } from './precos/precos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LocalFormComponent } from './locais/local-form/local-form.component';
import { LocalDetalheComponent } from './locais/local-detalhe/local-detalhe.component';
import { LocaisComponent } from './locais/locais.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: 'locais', component: LocaisComponent , children:[
       
        { path: 'novo', component: LocalFormComponent } ,
         { path: ':id', component: LocalDetalheComponent } 
    ] },
    { path: 'produtos', component: ProdutosComponent , children:[
       
        { path: 'novo', component: ProdutoFormComponent } ,
         { path: ':id', component: ProdutoDetalheComponent } 
    ] },
        { path: 'precos', component: PrecosComponent , children:[
        { path: 'novo', component: PrecoFormComponent } ,
         { path: ':id', component: PrecoDetalheComponent } 
    ] },
        { path: 'categorias', component: CategoriasComponent , children:[
        { path: 'novo', component:  CategoriaFormComponent } ,
         { path: ':id', component:  CategoriaDetalheComponent } 
    ] }
   
      
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);