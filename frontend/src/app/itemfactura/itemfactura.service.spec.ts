import { TestBed } from '@angular/core/testing';

import { ItemfacturaService } from './itemfactura.service';

describe('ItemfacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemfacturaService = TestBed.get(ItemfacturaService);
    expect(service).toBeTruthy();
  });
});
