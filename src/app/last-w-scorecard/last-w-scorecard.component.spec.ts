import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWScorecardComponent } from './last-w-scorecard.component';

describe('LastWScorecardComponent', () => {
  let component: LastWScorecardComponent;
  let fixture: ComponentFixture<LastWScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastWScorecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastWScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
