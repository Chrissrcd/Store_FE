export class Department {
    id: number = 0;
    created_by: string = '';
    create_date: Date = new Date();
    modified_by: string = '';
    modified_date: Date = new Date();
    status: boolean = false;
    description: string = '';
    name: string = '';
    phone: string = '';
    id_enterprise: number = 0;
  }
  export default Department;