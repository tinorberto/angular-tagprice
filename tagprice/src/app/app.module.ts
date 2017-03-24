import { LocalService } from './local.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocaisComponent } from './locais/locais.component';

@NgModule({
  declarations: [
    AppComponent,
    LocaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
