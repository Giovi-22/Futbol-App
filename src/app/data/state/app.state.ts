import { ActionReducerMap } from "@ngrx/store";
import { CompetitionsState, TeamsState } from "../../models/storeModelsInterfaces";
import { competitionReducer } from "./reducers/competitions.reducers";
import { teamReducer } from "./reducers/teams.reducers";

export interface AppState{
    competitions: CompetitionsState;
    teams: TeamsState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    competitions: competitionReducer,
    teams: teamReducer
}