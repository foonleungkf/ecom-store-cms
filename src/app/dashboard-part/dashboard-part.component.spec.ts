import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPartComponent } from './dashboard-part.component';

describe('DashboardPartComponent', () => {
  let component: DashboardPartComponent;
  let fixture: ComponentFixture<DashboardPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
