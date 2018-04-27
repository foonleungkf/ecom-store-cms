import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMemberPartComponent } from './modify-member-part.component';

describe('ModifyMemberPartComponent', () => {
  let component: ModifyMemberPartComponent;
  let fixture: ComponentFixture<ModifyMemberPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMemberPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMemberPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
