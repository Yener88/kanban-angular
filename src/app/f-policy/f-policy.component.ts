import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-f-policy',
  templateUrl: './f-policy.component.html',
  styleUrls: ['./f-policy.component.scss']
})
export class FPolicyComponent implements OnInit {

  title = 'POLICY';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
