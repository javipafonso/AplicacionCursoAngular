import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByApiRestComponent } from './by-api-rest.component';

describe('ByApiRestComponent', () => {
  let component: ByApiRestComponent;
  let fixture: ComponentFixture<ByApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByApiRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
