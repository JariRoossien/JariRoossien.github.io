import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkourComponent } from './parkour.component';

describe('ParkourComponent', () => {
  let component: ParkourComponent;
  let fixture: ComponentFixture<ParkourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
