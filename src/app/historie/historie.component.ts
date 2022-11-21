import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-historie',
  templateUrl: './historie.component.html',
  styleUrls: ['./historie.component.scss']
})
export class HistorieComponent implements OnInit {

  title = 'HISTORY';

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
