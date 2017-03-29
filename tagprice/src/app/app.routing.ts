import { LocalDetalheComponent } from './locais/local-detalhe/local-detalhe.component';
import { LocaisComponent } from './locais/locais.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const APP_ROUTES: Routes = [
    { path: 'locais', component: LocaisComponent },
    { path: 'local/:id', component: LocalDetalheComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);