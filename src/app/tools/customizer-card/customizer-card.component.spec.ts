import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerCardComponent } from './customizer-card.component';

describe('CustomizerCardComponent', () => {
  let component: CustomizerCardComponent;
  let fixture: ComponentFixture<CustomizerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
