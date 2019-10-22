import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishvideoComponent } from './publishvideo.component';

describe('PublishvideoComponent', () => {
  let component: PublishvideoComponent;
  let fixture: ComponentFixture<PublishvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
