import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingRxComponent } from './greeting-rx.component';

describe('GreetingRxComponent', () => {
  let component: GreetingRxComponent;
  let fixture: ComponentFixture<GreetingRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
