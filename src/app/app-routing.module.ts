import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectLayoutComponent } from './layout/project-layout/project-layout.component';



const routes: Routes = [

  {
    path: '',
    component: ProjectLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/view-module').then((m) => m.ViewModule),
      },

    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
