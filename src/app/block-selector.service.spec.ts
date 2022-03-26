import { TestBed } from '@angular/core/testing';

import { BlockSelectorService } from './block-selector.service';

describe('BlockSelectorService', () => {
  let service: BlockSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
