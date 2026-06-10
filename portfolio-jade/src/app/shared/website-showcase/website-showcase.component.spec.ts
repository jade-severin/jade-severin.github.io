import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteShowcaseComponent } from './website-showcase.component';

describe('WebsiteShowcaseComponent', () => {
  let component: WebsiteShowcaseComponent;
  let fixture: ComponentFixture<WebsiteShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteShowcaseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
