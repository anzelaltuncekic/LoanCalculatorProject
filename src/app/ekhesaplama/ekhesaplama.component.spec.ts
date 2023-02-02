import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKHesaplamaComponent } from './ekhesaplama.component';

describe('EKHesaplamaComponent', () => {
  let component: EKHesaplamaComponent;
  let fixture: ComponentFixture<EKHesaplamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EKHesaplamaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EKHesaplamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
