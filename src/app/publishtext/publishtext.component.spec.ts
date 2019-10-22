import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishtextComponent } from './publishtext.component';

describe('PublishtextComponent', () => {
  let component: PublishtextComponent;
  let fixture: ComponentFixture<PublishtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
