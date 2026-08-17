export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  salary: number;
  joiningDate: string;
  status: 'Active' | 'Inactive';
}
