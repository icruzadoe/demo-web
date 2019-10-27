import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgencyComponent } from './manageagency.component';

describe('ManagemultimediaComponent', () => {
  let component: ManageAgencyComponent;
  let fixture: ComponentFixture<ManageAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
