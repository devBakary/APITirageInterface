import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantTrierComponent } from './postulant-trier.component';

describe('PostulantTrierComponent', () => {
  let component: PostulantTrierComponent;
  let fixture: ComponentFixture<PostulantTrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantTrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulantTrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
