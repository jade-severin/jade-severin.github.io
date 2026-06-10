import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPromoComponent } from './text-promo.component';

describe('TextPromoComponent', () => {
  let component: TextPromoComponent;
  let fixture: ComponentFixture<TextPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextPromoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
