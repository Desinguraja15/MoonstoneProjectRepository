import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BreedService } from '../../services/breedservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  breedSubscription:Subscription | undefined;
  breedname: string = "";
  breedImage = [];

  constructor(private breedService:BreedService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {

    
    this.breedSubscription = this.breedService.breedData.subscribe((res:string) =>{
      if(res) {
        this.breedname = res;
        this.getBreadImage(res);
      } 
    },(err) => {      
      this.toastr.success(err.error.status);
    })
  }

  // This function using for collect the Breed Images
  getBreadImage(breedname:any){
    this.breedService.getBreedImageData(breedname).subscribe((breedImageRes:any) => {
      this.breedImage = breedImageRes.message;
    },(err) => {      
      this.toastr.success(err.error.status);
    })
  }

  ngOnDestroy():void {
    if (this.breedSubscription){
      this.breedSubscription.unsubscribe;
    }
  }

  // This message using for "Back to Home" Page.
  gotoBreedlist(){
    this.router.navigate(['/homepage']);
  }

}
