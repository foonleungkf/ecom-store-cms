import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProductPartComponent } from './modify-product-part.component';

describe('ModifyProductPartComponent', () => {
  let component: ModifyProductPartComponent;
  let fixture: ComponentFixture<ModifyProductPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProductPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProductPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
