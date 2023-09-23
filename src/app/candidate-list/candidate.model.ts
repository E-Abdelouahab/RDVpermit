// candidate.model.ts
export interface Candidate {
    id: number;
    name: string;
    examDate: string;
    examPaid: boolean;
  }
  
  // exam-date.model.ts
  export interface ExamDate {
    date: string;
    availableSlots: number;
  }
  