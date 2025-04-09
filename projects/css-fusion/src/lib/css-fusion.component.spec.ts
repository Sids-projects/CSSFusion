import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFusionComponent } from './css-fusion.component';

describe('CssFusionComponent', () => {
  let component: CssFusionComponent;
  let fixture: ComponentFixture<CssFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssFusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
