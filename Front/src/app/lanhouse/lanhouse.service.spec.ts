/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanHouseService } from './lanHouse.service';

describe('FilmesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanHouseService]
    });
  });

  it('should ...', inject([LanHouseService], (service: LanHouseService) => {
    expect(service).toBeTruthy();
  }));
});
