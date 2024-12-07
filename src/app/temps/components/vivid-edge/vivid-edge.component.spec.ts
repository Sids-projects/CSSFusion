import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VividEdgeComponent } from './vivid-edge.component';

describe('VividEdgeComponent', () => {
  let component: VividEdgeComponent;
  let fixture: ComponentFixture<VividEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VividEdgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VividEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
