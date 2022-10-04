import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreedsListComponent } from './breeds-list.component';

describe('BreedsListComponent', () => {
  let breedList:any = 'n02098286_2150.jpg';
  let subBreedList = {};
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call on valid',async()=>{
    component.breedList.controls['Breedimgage'].setValue('n02098286_2150.jpg');
    expect(component.breedList.valid).toBeTruthy();
  });

  it('',async()=>{
    fixture = TestBed.createComponent(BreedsListComponent);
    component= fixture.componentInstance;
    expect(component.subBreedList).toBeTruthy();
  });
});
