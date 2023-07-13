import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBannerComponent } from './competition-banner.component';

describe('CompetitionBannerComponent', () => {
  let component: CompetitionBannerComponent;
  let fixture: ComponentFixture<CompetitionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompetitionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
