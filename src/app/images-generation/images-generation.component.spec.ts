import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGenerationComponent } from './images-generation.component';

describe('ImagesGenerationComponent', () => {
  let component: ImagesGenerationComponent;
  let fixture: ComponentFixture<ImagesGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
