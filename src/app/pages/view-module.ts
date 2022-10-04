import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomePageComponent } from './homepage/homepage.component';
import { BreedImageComponent } from './breedimage/breedimage.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { BreedComponent } from './breed/breed.component';
import { ViewComponent } from './view.component';
import { PagesRoutingModule } from './view.routing.module';
import { BreedService } from '../services/breedservice';

@NgModule({
  declarations: [
    HomePageComponent,
    BreedComponent,
    BreedsListComponent,
    BreedImageComponent,
    ViewComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers:[BreedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewModule { }