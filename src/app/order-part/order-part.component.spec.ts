import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPartComponent } from './order-part.component';

describe('OrderPartComponent', () => {
  let component: OrderPartComponent;
  let fixture: ComponentFixture<OrderPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
