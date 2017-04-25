/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrecoService } from './preco.service';

describe('PrecoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecoService]
    });
  });

  it('should ...', inject([PrecoService], (service: PrecoService) => {
    expect(service).toBeTruthy();
  }));
});
