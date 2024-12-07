import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerAppComponent } from './customizer-app.component';

describe('CustomizerAppComponent', () => {
  let component: CustomizerAppComponent;
  let fixture: ComponentFixture<CustomizerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizerAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
