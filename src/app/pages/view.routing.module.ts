import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { HomePageComponent } from './homepage/homepage.component';
import { ViewComponent } from './view.component';


const routes: Routes = [
    {
        path: '',
        component: ViewComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'homepage',
            },
            { path: 'homepage', component: HomePageComponent },
            { path: 'breed', component: BreedComponent },
        ]
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
