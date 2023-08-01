import { createReducer, on } from "@ngrx/store";
import { currentCompetition, loadCompetitions, loadMatches, loadStandings, loadedCompetitions, saveCompetition, setCurrentSeason } from "../actions/competitions.actions";
import { CompetitionsState } from "src/app/models/storeModelsInterfaces";
import { CompetitionEntity } from "src/app/domain/entities/CompetitionEntity";

export const initialState:CompetitionsState = {
    loading:false,
    competitions:[],
    competition:{
        code:"",
        id:0,
        logo:"",
        name:""
    },
    current: "PL",
    matches:[],
    standings:[],
    currentSeason:""
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
    }),
    on(loadStandings,(state,{standings})=>{
        return {
            ...state,
            loading:false,
            standings
        }
    }),
    on(setCurrentSeason,(state,{currentSeason})=>{
        return{
            ...state,
            currentSeason
        }
    })
)