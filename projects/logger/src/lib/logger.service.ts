import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message:string){
    console.log(message);
  }
  warning(message:string){
    console.log(message);
  }
}
