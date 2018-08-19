import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsNavWrapperComponent } from './steps-nav-wrapper.component';

describe('StepsNavWrapperComponent', () => {
  let component: StepsNavWrapperComponent;
  let fixture: ComponentFixture<StepsNavWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsNavWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsNavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
