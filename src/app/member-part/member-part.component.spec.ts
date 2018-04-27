import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPartComponent } from './member-part.component';

describe('MemberPartComponent', () => {
  let component: MemberPartComponent;
  let fixture: ComponentFixture<MemberPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
