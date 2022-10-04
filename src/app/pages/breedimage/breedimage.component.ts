import { Component, OnInit } from '@angular/core';
import { BreedService } from "../../services/breedservice";
// import{ locale as englishLang} from 'src/assets/i18n/bn';
// import{ locale as banglaLang} from 'src/assets/i18n/en';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService} from "@ngx-translate/core";
import { LoggerService } from 'projects/logger/src/lib/logger.service';


@Component({
  selector: 'app-breedimage',
  templateUrl: './breedimage.component.html',
  styleUrls: ['./breedimage.component.scss'],
  providers:[BreedService,TranslateService,LoggerService,BsModalService,ToastrService]
})
export class BreedImageComponent implements OnInit { 

 
  singleSlideOffset = false;
  noWrap = false;
  showIndicator = false;
  slidesChangeMessage = '';
  ImageList = [];
  modalRef?: BsModalRef;
  modalImage: string = "";
  random_Count: any;
  breedList: any;
  currentLang = 'bn';


  constructor(private breedService:BreedService, 
              private modalService: BsModalService, 
              private toastr: ToastrService,
              public translate: TranslateService,
              private loggerService:LoggerService  
              ) {
              translate.setDefaultLang('en');
              translate.use('ar');
            }



            
  changeLocale(locale: string) {
    this.breedService.changeLocale(locale);   
  }

  ngOnInit(): void {
    this.get_random_images();

  }

  //This function using for get the random images 
  get_random_images(){
    this.random_Count = 3;
    this.breedService.getRandomDogImages(this.random_Count).subscribe((res:any) => {
      this.breedList = res;
      if(res){
        this.ImageList = res.message;
       this.loggerService.log('Get the Rondom images Successfully')
      }
    },(err) => {      
      this.toastr.error(err.error.status);
    })
  }

  //This function using for Show the Breed Image / Model View
  openModalImageView(template:any, image:any){
    this.modalRef = this.modalService.show(template);
    this.modalImage = image;
  }


}
