import { TestBed } from '@angular/core/testing';

import { PostulantTrierService } from './postulant-trier.service';

describe('PostulantTrierService', () => {
  let service: PostulantTrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantTrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
