import { ActionReducerMap } from "@ngrx/store";
import { CompetitionsState } from "../models/storeModelsInterfaces";
import { competitionReducer } from "./reducers/competitions.reducers";

export interface AppState{
    competitions: CompetitionsState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    competitions: competitionReducer
}