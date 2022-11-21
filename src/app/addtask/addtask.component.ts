import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  title = 'ADD TASK';

  constructor(private titleService:Title) { 

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
