import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsCardComponent } from './temps-card.component';

describe('TempsCardComponent', () => {
  let component: TempsCardComponent;
  let fixture: ComponentFixture<TempsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
