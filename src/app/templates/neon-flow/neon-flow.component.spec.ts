import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonFlowComponent } from './neon-flow.component';

describe('NeonFlowComponent', () => {
  let component: NeonFlowComponent;
  let fixture: ComponentFixture<NeonFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeonFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
