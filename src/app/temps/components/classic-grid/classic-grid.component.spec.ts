import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicGridComponent } from './classic-grid.component';

describe('ClassicGridComponent', () => {
  let component: ClassicGridComponent;
  let fixture: ComponentFixture<ClassicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
