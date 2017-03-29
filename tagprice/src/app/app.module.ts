import { LocalService } from './local.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocaisComponent } from './locais/locais.component';
import { LocalDetalheComponent } from './locais/local-detalhe/local-detalhe.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LocaisComponent,
    LocalDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
