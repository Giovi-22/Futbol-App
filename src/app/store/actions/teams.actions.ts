import { createAction, props } from '@ngrx/store';
import PlayerEntity from 'src/app/domain/entities/PlayerEntity';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { Team } from 'src/app/models/interfaces/competitioniterfaces';
 
export const loadTeams = createAction(
    '[Team List] Load Teams'
);

export const loadPopular = createAction(
    '[Team popular] Load popular teams',
    props<{teams: TeamEntity[]}>()
);

export const loadedTeams = createAction(
    '[Team List] Uploaded successfully',
    props<{teams: TeamEntity[]}>()
);

export const loadTeam = createAction(
    '[Team Team] Uploaded team successfully',
    props<{current:TeamEntity}>()
)

export const loadPlayers = createAction(
    '[Team Players] Loading list of players',
    props<{players:PlayerEntity[]}>()
)
