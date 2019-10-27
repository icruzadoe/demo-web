import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityregisterComponent } from './activityregister.component';

describe('ActivityregisterComponent', () => {
  let component: ActivityregisterComponent;
  let fixture: ComponentFixture<ActivityregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
