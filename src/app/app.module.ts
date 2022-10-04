import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProjectLayoutComponent } from './layout/project-layout/project-layout.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ViewModule } from './pages/view-module';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader"



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectLayoutComponent, 

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ViewModule,
    HttpClientModule,
  
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    }),
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
