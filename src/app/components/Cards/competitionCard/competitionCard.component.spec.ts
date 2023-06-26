import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCardComponent } from './competitionCard.component';

describe('CompetitionComponent', () => {
  let component: CompetitionCardComponent;
  let fixture: ComponentFixture<CompetitionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
