import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    TeamCardComponent,
    RouterModule
  ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteTeams:TeamEntity[]=[];
  constructor(
    private userM: UserManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userM.userIsLogged().subscribe({
      next:(result)=>{
          if(!result){
              this.router.navigate(["/"]);
          }
      }
    })
    this.userM.getFavoriteTeams().subscribe({
      next:(result)=>{
          if(!result){
            this.favoriteTeams = [];
          }else{
            this.favoriteTeams = result;
          }
      }
    })
  }

}
