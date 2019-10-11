import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'guardados', loadChildren: './guardados/guardados.module#GuardadosPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }, 
  // { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
