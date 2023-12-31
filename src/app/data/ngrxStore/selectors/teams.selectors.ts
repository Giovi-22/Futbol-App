import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {  TeamsState } from 'src/app/models/storeModels.Interfaces';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
 
 
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

export const popularTeams = createSelector(
  selectTeamsFeature,
  (state: TeamsState)=> state.popularTeams
)

export const listOfPlayers = createSelector(
  selectTeamsFeature,
  (state: TeamsState)=> state.players
)