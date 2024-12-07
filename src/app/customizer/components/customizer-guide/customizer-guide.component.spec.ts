import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerGuideComponent } from './customizer-guide.component';

describe('CustomizerGuideComponent', () => {
  let component: CustomizerGuideComponent;
  let fixture: ComponentFixture<CustomizerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizerGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
