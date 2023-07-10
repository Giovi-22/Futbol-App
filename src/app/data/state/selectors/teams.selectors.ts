import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {  TeamsState } from 'src/app/models/storeModelsInterfaces';
 
 
export const selectTeamsFeature = (state: AppState) => state.teams;
 
export const selectTeamsList = createSelector(
    selectTeamsFeature,
  (state: TeamsState) => state.teams
);

export const selectLoadingTeams = createSelector(
    selectTeamsFeature,
  (state: TeamsState) => state.loading
);

export const selectedTeam = createSelector(
  selectTeamsFeature,
  (state: TeamsState)=> state.current
)