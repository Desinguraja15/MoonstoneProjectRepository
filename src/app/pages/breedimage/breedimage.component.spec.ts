import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreedImageComponent } from './breedimage.component';
import { ViewModule } from 'src/app/pages/view-module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';



describe('BreedImageComponent', () => {
  let breedList:any = {};
  let modalRef:any = {};
  let component: BreedImageComponent;
  let fixture: ComponentFixture<BreedImageComponent>;
  let random_Count = 5;
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ BreedImageComponent ],
      imports: [HttpClientModule,
                ViewModule, 
                CarouselModule.forRoot(),
                RouterTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Test the component
  it('should initiate ngOnint lifecycle', () => {
    fixture = TestBed.createComponent(BreedImageComponent);
    component= fixture.componentInstance;
    component.breedList ={};
    expect(component).toBeTruthy();
  });

 //Unit test for fetching image   
  it('should not fetch image', () => {
    fixture = TestBed.createComponent(BreedImageComponent);
    component= fixture.componentInstance;
    expect(component.modalRef).toBeTruthy();
  });

  it('it should loaded the random value',() =>{
    expect(component.get_random_images()).toEqual();
  })
});
