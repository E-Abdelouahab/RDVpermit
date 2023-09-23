import { Component, OnInit } from '@angular/core';
import { CandidateListService } from '../candidate-list/candidate-list.service'; // Adjust the paths accordingly
import { Candidate } from '../candidate-list/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateListService) { }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }
}
