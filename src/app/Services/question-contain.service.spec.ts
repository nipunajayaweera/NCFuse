import { TestBed, inject } from '@angular/core/testing';

import { QuestionContainService } from './question-contain.service';

describe('QuestionContainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionContainService]
    });
  });

  it('should be created', inject([QuestionContainService], (service: QuestionContainService) => {
    expect(service).toBeTruthy();
  }));
});
