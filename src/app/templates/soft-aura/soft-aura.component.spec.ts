import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftAuraComponent } from './soft-aura.component';

describe('SoftAuraComponent', () => {
  let component: SoftAuraComponent;
  let fixture: ComponentFixture<SoftAuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftAuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftAuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
