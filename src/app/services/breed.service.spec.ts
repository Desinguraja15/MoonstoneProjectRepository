import { TestBed } from '@angular/core/testing';

import { BreedService } from './breedservice';

describe('DogProfileService', () => {
  let service: BreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it(`should be able to confirm if a random`, async()=>{
    service.getRandomDogImages('https://dog.ceo/api/breed/image/random/10').subscribe((res:any)=>{
        expect(res).toBeTruthy();
    });
});

it(`should fetch the Breed image`, async()=>{
  service.getBreedImageData('https://dog.ceo/api/breed/african/images').subscribe((res:any)=>{
      expect(res).toBeTruthy();
  });
});

});
