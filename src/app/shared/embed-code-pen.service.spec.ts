import { TestBed } from '@angular/core/testing';

import { EmbedCodePenService } from './embed-code-pen.service';

describe('EmbedCodepenService', () => {
  let service: EmbedCodePenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbedCodePenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
