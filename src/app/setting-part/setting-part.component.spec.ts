import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPartComponent } from './setting-part.component';

describe('SettingPartComponent', () => {
  let component: SettingPartComponent;
  let fixture: ComponentFixture<SettingPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
