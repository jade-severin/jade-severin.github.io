import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalameoContainerComponent } from './calameo-container.component';

describe('CalameoContainerComponent', () => {
  let component: CalameoContainerComponent;
  let fixture: ComponentFixture<CalameoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalameoContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalameoContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
