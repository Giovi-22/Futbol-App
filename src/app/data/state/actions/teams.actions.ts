import { createAction, props } from '@ngrx/store';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
 
export const loadTeams = createAction(
    '[Team List] Load Teams'
);

export const loadedTeams = createAction(
    '[Team List] Uploaded successfully',
    props<{teams: Team[]}>()
);

export const loadTeam = createAction(
    '[Team Team] Uploaded team successfully',
    props<{team:Team}>()
)
