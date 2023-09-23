// candidate-list.service.ts
import { Injectable } from '@angular/core';
import { Candidate, ExamDate } from './candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateListService {
  private candidates: Candidate[] = [
    { id: 1, name: 'John Doe', examDate: '2023-10-15', examPaid: true },
    // ... Ajoutez d'autres candidats ici
  ];

  private examDates: ExamDate[] = [
    { date: '2023-10-15', availableSlots: 10 },
    // ... Ajoutez d'autres dates d'examen ici
  ];

  getCandidates(): Candidate[] {
    return this.candidates;
  }

  getExamDates(): ExamDate[] {
    return this.examDates;
  }
}
