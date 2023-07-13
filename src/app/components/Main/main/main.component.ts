import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CompetitionBannerComponent } from '../../Pages/Competitions/competition-banner/competition-banner.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule,CompetitionBannerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  page:string = "";
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.route.events.subscribe(
      (event)=>{
        if(event instanceof NavigationEnd){
          const currentPath = event.urlAfterRedirects;
          const active = currentPath.split('/')[1];
          console.log("La pagina activa: ",active)
          this.page = active.length <= 0 ? "home" : active;
        }
        }
      )
  }

}
