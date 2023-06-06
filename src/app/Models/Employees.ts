export class Employee {
    id: number = 0;
    created_by: string = '';
    create_date: Date = new Date();
    modified_by: string = '';
    modified_date: Date = new Date();
    status: boolean = false;
    age: number = 0;
    email: string = '';
    name: string = '';
    position: string = '';
    surname: string = '';
  }
  export default Employee;