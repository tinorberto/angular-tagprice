import { ProdutoService } from './produtos/produto.service';
import { CategoriaService } from './categorias/categoria.service';
import { LocalService } from './locais/local.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocaisComponent } from './locais/locais.component';
import { LocalDetalheComponent } from './locais/local-detalhe/local-detalhe.component';
import { routing } from './app.routing';
import { LocalFormComponent } from './locais/local-form/local-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetalheComponent } from './categorias/categoria-detalhe/categoria-detalhe.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { PrecosComponent } from './precos/precos.component';
import { PrecoDetalheComponent } from './precos/preco-detalhe/preco-detalhe.component';
import { PrecoFormComponent } from './precos/preco-form/preco-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LocaisComponent,
    LocalDetalheComponent,
    LocalFormComponent,
    CategoriasComponent,
    CategoriaDetalheComponent,
    CategoriaFormComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    ProdutoFormComponent,
    PrecosComponent,
    PrecoDetalheComponent,
    PrecoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LocalService, CategoriaService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
