import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from './core/public-layout/public-layout.component';
import {AdminLayoutComponent} from './core/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
