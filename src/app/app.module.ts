import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ExamCalendarComponent } from './exam-calendar/exam-calendar.component';
import { MatTableModule } from '@angular/material/table';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    ExamCalendarComponent,
    CandidateTableComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
