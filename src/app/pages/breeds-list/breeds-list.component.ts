import { Component, OnInit } from '@angular/core';
import { BreedService } from "../../services/breedservice";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from 'projects/logger/src/public-api';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {

  breedList:any =[];
  subBreedList:string[] = [];

  constructor(private breedService: BreedService, 
              private router: Router, 
              private toastr: ToastrService,
              private loggerService:LoggerService) { }

  ngOnInit(): void {
    this.getBreedSubBreedList();
  }

  //Breed and Subbreed List
  getBreedSubBreedList(){
    this.breedService.getBreedAndSubBreedList().subscribe((res:any) => {
      if(res){
        this.loggerService.log('Get the Breed and subbreeds')
      }
      this.breedList = Object.keys(res.message);
       this.breedList.forEach((breed:string) => {   
        this.subBreedList.push(res.message[breed]);
      });
    },(err) => {      
      this.toastr.success(err.error.status);
    })
  }

  //Image view
  showBreedImage(breed:any){
    this.breedService.breedData.next(breed);
    this.router.navigate(['/breed']);
  }


}
