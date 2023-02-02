import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TKHesaplamaComponent } from './tkhesaplama.component';

describe('TKHesaplamaComponent', () => {
  let component: TKHesaplamaComponent;
  let fixture: ComponentFixture<TKHesaplamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TKHesaplamaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TKHesaplamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
