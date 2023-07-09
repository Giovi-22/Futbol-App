import { createReducer, on } from "@ngrx/store";
import { Competition } from "src/app/models/interfaces/competitionInterfaces";
import { loadCompetitions } from "../actions/competitions.actions";
import { CompetitionsState } from "src/app/models/storeModelsInterfaces";

export const initialState:CompetitionsState = {loading:false,competitions:[]};

export const competitionReducer = createReducer(
    initialState,
    on(loadCompetitions,(state)=>{return {...state,loading:true}})
)