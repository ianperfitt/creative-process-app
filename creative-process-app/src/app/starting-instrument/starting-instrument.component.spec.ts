import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingInstrumentComponent } from './starting-instrument.component';

describe('StartingInstrumentComponent', () => {
  let component: StartingInstrumentComponent;
  let fixture: ComponentFixture<StartingInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartingInstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartingInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
