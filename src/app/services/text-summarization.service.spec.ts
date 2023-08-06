import { TestBed } from '@angular/core/testing';

import { TextSummarizationService } from './text-summarization.service';

describe('TextSummarizationService', () => {
  let service: TextSummarizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSummarizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
