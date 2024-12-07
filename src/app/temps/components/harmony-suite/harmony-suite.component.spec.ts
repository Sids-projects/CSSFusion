import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonySuiteComponent } from './harmony-suite.component';

describe('HarmonySuiteComponent', () => {
  let component: HarmonySuiteComponent;
  let fixture: ComponentFixture<HarmonySuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HarmonySuiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarmonySuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
