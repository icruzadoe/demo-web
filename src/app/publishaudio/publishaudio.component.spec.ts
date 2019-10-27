import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishaudioComponent } from './publishaudio.component';

describe('PublishaudioComponent', () => {
  let component: PublishaudioComponent;
  let fixture: ComponentFixture<PublishaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
