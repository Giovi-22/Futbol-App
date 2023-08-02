import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CompetitionsState } from 'src/app/models/storeModels.Interfaces';
 
 
export const selectCompetitionsFeature = (state: AppState) => state.competitions;
 
export const selectCompetitionsList = createSelector(
    selectCompetitionsFeature,
  (state: CompetitionsState) => state.competitions
);

export const selectLoadingCompetitions = createSelector(
    selectCompetitionsFeature,
  (state: CompetitionsState) => state.loading
);

export const selectCurrentCompetition = createSelector(
  selectCompetitionsFeature,
(state: CompetitionsState) => state.current
);

export const selectCompetition = createSelector(
  selectCompetitionsFeature,
(state: CompetitionsState) => state.competition
);

export const matchesList = createSelector(
  selectCompetitionsFeature,
(state: CompetitionsState) => state.matches
);

export const standingsList = createSelector(
  selectCompetitionsFeature,
  (state: CompetitionsState)=>state.standings
)

export const getCurrentSeason = createSelector(
  selectCompetitionsFeature,
  (state: CompetitionsState)=>state.currentSeason
)