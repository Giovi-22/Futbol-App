import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from 'src/app/models/storeModelsInterfaces';

 
export const selectUserFeature = (state: AppState) => state.user;
 
export const selectUser = createSelector(
    selectUserFeature,
  (state: UserState) => state.user
);

export const isLogged = createSelector(
    selectUserFeature,
  (state: UserState) => state.isLogged
);

export const favoriteTeamList = createSelector(
  selectUserFeature,
  (state: UserState) => state.user.favoriteTeams
)

