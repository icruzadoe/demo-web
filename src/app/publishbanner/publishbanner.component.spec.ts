import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishbannerComponent } from './publishbanner.component';

describe('PublishbannerComponent', () => {
  let component: PublishbannerComponent;
  let fixture: ComponentFixture<PublishbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
