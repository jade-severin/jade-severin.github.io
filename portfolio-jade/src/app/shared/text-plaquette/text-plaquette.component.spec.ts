import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPlaquetteComponent } from './text-plaquette.component';

describe('TextPlaquetteComponent', () => {
  let component: TextPlaquetteComponent;
  let fixture: ComponentFixture<TextPlaquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPlaquetteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextPlaquetteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
