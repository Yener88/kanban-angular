import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board/board.component';
import { FPolicyComponent } from './f-policy/f-policy.component';
import { HistorieComponent } from './historie/historie.component';
import { StartpageComponent } from './startpage/startpage.component';


const routes: Routes = [
  {
    path: 'startpage',
    component: StartpageComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'backlog',
    component: BacklogComponent
  },
  {
    path: 'addtask',
    component: AddtaskComponent
  },
  {
    path: 'history',
    component: HistorieComponent
  },
  {
    path: 'fpolicy',
    component: FPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
