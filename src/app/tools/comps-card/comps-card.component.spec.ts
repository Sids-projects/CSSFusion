import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsCardComponent } from './comps-card.component';

describe('CompsCardComponent', () => {
  let component: CompsCardComponent;
  let fixture: ComponentFixture<CompsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
