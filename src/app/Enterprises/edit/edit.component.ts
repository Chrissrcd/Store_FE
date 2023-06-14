import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EnterprisesService} from '../../Service/enterprises.service';
import Enterprise from 'src/app/Models/Enterprises';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditEnterprisesComponent {

  enterprise:Enterprise = new Enterprise(); 
  constructor( private router:Router, private service:EnterprisesService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar() {
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.getEnterpriseId(+id).subscribe(data => {
        this.enterprise = data;
      });
    }
  }
  Actualizar(enterprise: Enterprise): void {
    this.enterprise.modifiedBy = 'Admin';
    this.enterprise.modifiedDate = new Date();

    this.service.updateEnterprise(enterprise).subscribe(data => {
      this.enterprise = data;
      alert('¡Actualizado exitosamente!');
      this.router.navigate(['enterprises']);
    });
  }
}
