import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatComponent } from './add-treat.component';

describe('AddTreatComponent', () => {
  let component: AddTreatComponent;
  let fixture: ComponentFixture<AddTreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
