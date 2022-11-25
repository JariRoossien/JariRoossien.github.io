import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCLeaderboardComponent } from './wcleaderboard.component';

describe('WCLeaderboardComponent', () => {
  let component: WCLeaderboardComponent;
  let fixture: ComponentFixture<WCLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WCLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WCLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
