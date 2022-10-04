import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TranslateService} from "@ngx-translate/core";
import { Subject } from 'rxjs';
// import { enum } from "../services/log.service"


export interface Lacale{
    lang:string;
    data:object;
}

@Injectable({
  providedIn: 'root'
})
export class BreedService {
 
  localeEvent = new Subject<string>();

  public breedData = new BehaviorSubject<string>('');
  constructor(private http: HttpClient,
              public translate:TranslateService) {
                // translate.addLangs(['en','bn']);
                // translate.setDefaultLang('bn')
                // translate.use(this.getCurrentLang());
               }




  
changeLocale(locale: string){
this.translate.use(locale);
this.localeEvent.next(locale);
}

  getRandomDogImages(count:any){
    return this.http.get(`${environment.resourceURL}image/random/`+count);
  }

  getBreedAndSubBreedList(){
    return this.http.get(`${environment.resourceURL}list/all`);
  }

  getBreedImageData(data:any){
    return this.http.get(`${environment.breedResourceURL}` + data + '/images');
  }
}
