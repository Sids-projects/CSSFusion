import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkFusionComponent } from './dark-fusion.component';

describe('DarkFusionComponent', () => {
  let component: DarkFusionComponent;
  let fixture: ComponentFixture<DarkFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkFusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
