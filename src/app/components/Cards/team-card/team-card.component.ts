import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  
})
export class TeamCardComponent implements OnInit {

  @Input() teamData:TeamEntity = new TeamEntity({});
  isLogged$ = new Observable<boolean>();
  
  toggleButton:boolean = false;
  favoriteClass:string = "bi bi-star favorite favorite-false";
  favoriteTeams!:TeamEntity[];

  constructor(
    private router:Router,
    private teamM: TeamManagerService,
    private userM: UserManagerService,
    private toastr: ToastrService
    ) { 
    
  }

  navigateTo(tid:number){
    this.teamM.findApiTeam(tid);
    this.router.navigate([`/team`]);
  }

  #isOnFavoriteList(teams:TeamEntity[]){
    const result = teams.find(team => team.id === this.teamData.id);
    if(result){
      this.favoriteClass = "bi bi-star-fill favorite favorite-true";
      this.toggleButton = true;
    }
    return false;
  }

  ngOnInit(): void {
   this.isLogged$ = this.userM.userIsLogged();
   this.teamM.setApiStrategy('TeamfootballApi');
   this.userM.getFavoriteTeams().subscribe({
    next:(teams)=>{
      if(teams){
        this.#isOnFavoriteList(teams);
      }
    }
   })
  }

  addToFavorite(toggle:boolean){
    this.toggleButton = !toggle;
    if(this.toggleButton){
      //agregar equipo a la lista de favoritos
      this.userM.setFavoriteTeam(this.teamData).subscribe({
        next:(result)=>{
            if(result.status.includes('success')){
              this.toastr.info(
                'Successfully added to the favorite list',
                'Team',
                {
                  progressBar:true,
                  progressAnimation:'increasing',
                  easeTime:400,
                  timeOut:3000,
                  newestOnTop:true,
                  positionClass: "toast-top-center"
                })
            }
        },
        error:(error:HttpErrorResponse)=>{
          this.toastr.error(`Could not add the team to the favorite list, ${error.status}`,"Error");
        }
      })
      return this.favoriteClass = "bi bi-star-fill favorite favorite-true";
    }
    //eliminar equipo de la lista
    this.userM.removeFavoriteTeam(this.teamData.id || 0).subscribe({
      next:(result)=>{
          this.toastr.info(
            'Successfully removed team from the favorite list',
            'Team',
            {
              progressBar:true,
              progressAnimation:'increasing',
              easeTime:400,
              timeOut:3000,
              newestOnTop:true,
              positionClass: "toast-top-center"
            })
      },
      error:(error)=>{
        this.toastr.error(`Could not remove the team from the favorite list, ${error.status}`,"Error");

      }
    })
    return this.favoriteClass = "bi bi-star favorite favorite-false";

  }

}
