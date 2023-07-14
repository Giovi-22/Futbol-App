import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesBannerComponent } from './matches-banner.component';

describe('MatchesBannerComponent', () => {
  let component: MatchesBannerComponent;
  let fixture: ComponentFixture<MatchesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatchesBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
