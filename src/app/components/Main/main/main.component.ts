import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompetitionBannerComponent } from '../../Pages/Competitions/competition-banner/competition-banner.component';
import { TeamBannerComponent } from '../../Pages/Team/team-banner/team-banner.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule,CompetitionBannerComponent,TeamBannerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit(): void {
    
  }

}
