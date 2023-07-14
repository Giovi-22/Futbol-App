import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches-banner.component.html',
  styleUrls: ['./matches-banner.component.scss']
})
export class MatchesBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
