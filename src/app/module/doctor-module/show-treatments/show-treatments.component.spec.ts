import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentsComponent } from './show-treatments.component';

describe('ShowTreatmentsComponent', () => {
  let component: ShowTreatmentsComponent;
  let fixture: ComponentFixture<ShowTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTreatmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
