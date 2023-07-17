import { createReducer, on } from "@ngrx/store";
import { currentCompetition, loadCompetitions, loadMatches, loadedCompetitions, saveCompetition } from "../actions/competitions.actions";
import { CompetitionsState } from "src/app/models/storeModelsInterfaces";
import { CompetitionEntity } from "src/app/models/entities/CompetitionEntity";

export const initialState:CompetitionsState = {
    loading:false,
    competitions:[],
    competition:null,
    current: "PL",
    matches:[]
};

export const competitionReducer = createReducer(
    initialState,
    on(loadCompetitions,(state)=>{return {...state,loading:true}}),
    on(saveCompetition,(state,{competition})=>{
        console.log("CUrrent: ",competition)
        return{
            ...state,
            loading:false,
            competition:new CompetitionEntity(competition)
        }
    }),
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
    }),
    on(loadMatches,(state,{matches})=>{
        return {
            ...state,
            loading:false,
            matches
        }
    })
)