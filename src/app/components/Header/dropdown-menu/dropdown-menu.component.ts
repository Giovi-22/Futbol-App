import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionCard } from 'src/app/models/storeModelsInterfaces';
import { FetchDataService } from 'src/app/services/fetch-data.service';
//------------import for router params--------------------------------
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
//--------------------------------------------------------
//---------------------NGRX-SOTORE---------------------
import { loadCompetitions, loadedCompetitions } from 'src/app/data/state/actions/competitions.actions';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { selectCompetitionsList, selectLoadingCompetitions } from 'src/app/data/state/selectors/competitions.selectors';
import { AppState } from 'src/app/data/state/app.state';
import { competitions } from 'src/app/services/competitions';

//---------------------------------------------------------
@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,DropdownItemComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  
  urlCompetition:string='https://api.football-data.org/v4/competitions/';
  
  loading$:Observable<boolean> = new Observable();
  competitions$:Observable<any> = new Observable();
  selectedCode:string; 
  constructor(
    private getApiData: FetchDataService, 
    private route: ActivatedRoute, 
    private router: Router,
    private store: Store<AppState>
    ) {
    this.selectedCode = "PL";
    
  }

  getData(competitionCode:string){
    this.getApiData.fetchData(`${this.urlCompetition}${competitionCode}/teams`).subscribe({
      next:(result => console.log(result))
    })
  }

  navigateTo(competitionCode:string){
    this.selectedCode = competitionCode;
    this.router.navigate([`/competitions/${competitionCode}`]);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCompetitions());
    this.store.dispatch(loadedCompetitions({competitions}))
    this.loading$ = this.store.select(selectLoadingCompetitions);
    this.competitions$ = this.store.select(selectCompetitionsList);
  }

}
