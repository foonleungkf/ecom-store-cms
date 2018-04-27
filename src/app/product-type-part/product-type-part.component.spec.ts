import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypePartComponent } from './product-type-part.component';

describe('ProductPartComponent', () => {
  let component: ProductPartComponent;
  let fixture: ComponentFixture<ProductTypePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
