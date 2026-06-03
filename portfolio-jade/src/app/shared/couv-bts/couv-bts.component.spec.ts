import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouvBtsComponent } from './couv-bts.component';

describe('CouvBtsComponent', () => {
  let component: CouvBtsComponent;
  let fixture: ComponentFixture<CouvBtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouvBtsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CouvBtsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
