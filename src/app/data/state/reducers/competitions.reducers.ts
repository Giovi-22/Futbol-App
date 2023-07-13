import { createReducer, on } from "@ngrx/store";
import { currentCompetition, loadCompetitions, loadedCompetitions } from "../actions/competitions.actions";
import { CompetitionsState } from "src/app/models/storeModelsInterfaces";
import { CompetitionEntity } from "src/app/models/entities/CompetitionEntity";

export const initialState:CompetitionsState = {
    loading:false,
    competitions:[],
    current: "PL"
};

export const competitionReducer = createReducer(
    initialState,
    on(loadCompetitions,(state)=>{return {...state,loading:true}}),
    on(loadedCompetitions,(state,{competitions})=>{
        return {
            ...state,
            loading:false,
            competitions
        };
    }),
    on(currentCompetition,(state,{current})=>{
        return {
            ...state,
            loading:false,
            current
        }
    })
)