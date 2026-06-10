import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPlaquetteRedactionComponent } from './text-plaquette-redaction.component';

describe('TextPlaquetteRedactionComponent', () => {
  let component: TextPlaquetteRedactionComponent;
  let fixture: ComponentFixture<TextPlaquetteRedactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPlaquetteRedactionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextPlaquetteRedactionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
