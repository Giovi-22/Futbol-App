import { ActionReducerMap } from "@ngrx/store";
import { CompetitionsState, TeamsState, UserState } from "../../models/storeModels.Interfaces";
import { competitionReducer } from "./reducers/competitions.reducers";
import { teamReducer } from "./reducers/teams.reducers";
import { userReducer } from "./reducers/user.reducers";

export interface AppState{
    competitions: CompetitionsState;
    teams: TeamsState;
    user: UserState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    competitions: competitionReducer,
    teams: teamReducer,
    user: userReducer
}