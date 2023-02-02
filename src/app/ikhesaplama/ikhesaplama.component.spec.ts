import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IKHesaplamaComponent } from './ikhesaplama.component';

describe('IKHesaplamaComponent', () => {
  let component: IKHesaplamaComponent;
  let fixture: ComponentFixture<IKHesaplamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IKHesaplamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IKHesaplamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
