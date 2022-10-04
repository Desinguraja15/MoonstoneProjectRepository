import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreedComponent } from './breed.component';

describe('BreedComponent', () => {
  let component: BreedComponent;
  let fixture: ComponentFixture<BreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// Testing getBreedImage function 
  it("getBreadImage function should be get values",() => {
    expect(component.getBreadImage('spaniel-sussex')).toBeTruthy()
  });

  //Test the html image element 
  it("image elemenet test for image load or not",()=>{
    const image= fixture.nativeElement;
    expect(image.ImageList(".some").image)
  })


});
