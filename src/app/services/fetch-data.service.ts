import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dotenv from 'dotenv';
dotenv.config();

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
    return this.http.get(url,this.#options);
  }
}
