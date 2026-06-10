import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEquipeComponent } from './text-equipe.component';

describe('TextEquipeComponent', () => {
  let component: TextEquipeComponent;
  let fixture: ComponentFixture<TextEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEquipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextEquipeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
