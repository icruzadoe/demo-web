import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmultimediaComponent } from './addmultimedia.component';

describe('AddmultimediaComponent', () => {
  let component: AddmultimediaComponent;
  let fixture: ComponentFixture<AddmultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
