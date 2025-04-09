import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalEdgeComponent } from './minimal-edge.component';

describe('MinimalEdgeComponent', () => {
  let component: MinimalEdgeComponent;
  let fixture: ComponentFixture<MinimalEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinimalEdgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinimalEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
