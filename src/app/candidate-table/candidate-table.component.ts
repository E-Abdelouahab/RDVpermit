import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateListService } from '../candidate-list/candidate-list.service';
import { Candidate } from '../candidate-list/candidate.model';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'examDate', 'examPaid'];

  dataSource = new MatTableDataSource<Candidate>(); // Use the correct type

  constructor(private candidateService: CandidateListService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.candidateService.getCandidates());
  console.log('DataSource:', this.dataSource.data); // Add this line
  }

  applyFilter(filterValue: string, column: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
