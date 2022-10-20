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
    component: StartpageComponent,
    data: { title: "Startpage" }
  },
  {
    path: 'board',
    component: BoardComponent,
    data: { title: "Board" }
  },
  {
    path: 'backlog',
    component: BacklogComponent,
    data: { title: "Backlog" }
  },
  {
    path: 'addtask',
    component: AddtaskComponent,
    data: { title: "Add Task" }
  },
  {
    path: 'history',
    component: HistorieComponent,
    data: { title: "History" }
  },
  {
    path: 'fpolicy',
    component: FPolicyComponent,
    data: { title: "Policy" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
