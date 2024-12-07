import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeSeriesComponent } from './luxe-series.component';

describe('LuxeSeriesComponent', () => {
  let component: LuxeSeriesComponent;
  let fixture: ComponentFixture<LuxeSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuxeSeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuxeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
