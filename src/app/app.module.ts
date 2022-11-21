import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule,  } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { BacklogComponent } from './backlog/backlog.component';
import { HistorieComponent } from './historie/historie.component';
import { FPolicyComponent } from './f-policy/f-policy.component';
import { StartpageComponent } from './startpage/startpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    BoardComponent,
    NavbarComponent,
    FooterComponent,
    AddtaskComponent,
    BacklogComponent,
    HistorieComponent,
    FPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
