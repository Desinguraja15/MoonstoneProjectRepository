import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from "rxjs";



@Injectable()
export class HttpResponseTimeLogger implements HttpInterceptor {
 
     constructor(private deviceService: DeviceDetectorService){

     }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }


}

