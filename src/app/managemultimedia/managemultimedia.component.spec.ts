import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemultimediaComponent } from './managemultimedia.component';

describe('ManagemultimediaComponent', () => {
  let component: ManagemultimediaComponent;
  let fixture: ComponentFixture<ManagemultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
