import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPrimeComponent } from './classic-prime.component';

describe('ClassicPrimeComponent', () => {
  let component: ClassicPrimeComponent;
  let fixture: ComponentFixture<ClassicPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicPrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
