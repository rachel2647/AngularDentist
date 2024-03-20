import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTreatComponent } from './update-treat.component';

describe('UpdateTreatComponent', () => {
  let component: UpdateTreatComponent;
  let fixture: ComponentFixture<UpdateTreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
