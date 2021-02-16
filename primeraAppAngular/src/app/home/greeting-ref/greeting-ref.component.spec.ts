import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingRefComponent } from './greeting-ref.component';

describe('GreetingRefComponent', () => {
  let component: GreetingRefComponent;
  let fixture: ComponentFixture<GreetingRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
