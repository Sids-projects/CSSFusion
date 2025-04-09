import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsCodeComponent } from './comps-code.component';

describe('CompsCodeComponent', () => {
  let component: CompsCodeComponent;
  let fixture: ComponentFixture<CompsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompsCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
