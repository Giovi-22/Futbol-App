import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    TeamCardComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteTeams:TeamEntity[]=[];
  constructor(
    private userM: UserManagerService
  ) { }

  ngOnInit(): void {
    this.userM.getFavoriteTeams().subscribe({
      next:(result)=>{
        console.log("La lista de equipos favoritos es: ",result)
          if(!result){
            this.favoriteTeams = [];
          }else{
            this.favoriteTeams = result;
          }
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
