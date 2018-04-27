import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPartComponent } from './product-part.component';

describe('ProductPartComponent', () => {
  let component: ProductPartComponent;
  let fixture: ComponentFixture<ProductPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
