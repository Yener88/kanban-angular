import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  title = 'BACKLOG';

  constructor(private titleService:Title) { 

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
