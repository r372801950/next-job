// types/index.ts
export interface JobPosition {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedTime: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  tags: string[];
}