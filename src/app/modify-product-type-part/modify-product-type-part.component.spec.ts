import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProductPartComponent } from './modify-product-type-part.component';

describe('ModifyProductPartComponent', () => {
  let component: ModifyProductTypePartComponent;
  let fixture: ComponentFixture<ModifyProductTypePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProductTypePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProductTypePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
