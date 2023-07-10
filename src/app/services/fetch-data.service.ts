import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competitions, Team } from '../models/interfaces/competitionInterfaces';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  #options = {
    headers:{
      'Content-Type':'application/json',
      'X-Auth-Token': '860f9df0ee73439a9cc24ca71319e092'
  }
}
  constructor(private http: HttpClient) {

   }

  fetchData(url:string){
    return this.http.get<Competitions>(url,this.#options);
  }
  apiTeam(url:string){
    return this.http.get<Team>(url,this.#options);
  }
}
