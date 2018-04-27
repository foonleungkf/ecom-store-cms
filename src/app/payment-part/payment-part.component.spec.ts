import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPartComponent } from './payment-part.component';

describe('PaymentPartComponent', () => {
  let component: PaymentPartComponent;
  let fixture: ComponentFixture<PaymentPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
