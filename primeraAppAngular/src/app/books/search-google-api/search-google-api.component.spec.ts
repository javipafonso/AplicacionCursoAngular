import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGoogleApiComponent } from './search-google-api.component';

describe('SearchGoogleApiComponent', () => {
  let component: SearchGoogleApiComponent;
  let fixture: ComponentFixture<SearchGoogleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGoogleApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGoogleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
