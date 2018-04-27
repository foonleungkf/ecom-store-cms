import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailPartComponent } from './order-detail-part.component';

describe('OrderDetailPartComponent', () => {
  let component: OrderDetailPartComponent;
  let fixture: ComponentFixture<OrderDetailPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
