import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {EnterprisesService} from '../../Service/enterprises.service';
import Enterprise from 'src/app/Models/Enterprises';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarEnterprisesComponent implements OnInit {

  enterprises:Enterprise[] = []; // Asignación inicial vacía
  constructor(private service:EnterprisesService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEnterprises().subscribe(data=>{
      this.enterprises=data;
    })
  }
  Editar(enterprise: Enterprise): void {
    localStorage.setItem('id', enterprise.id.toString());
    this.router.navigate(['/enterprises/edit']);
  }

  Delete(enterprise: Enterprise): void {
    this.service.deleteEnterprise(enterprise).subscribe(data => {
      this.enterprises = this.enterprises.filter(e => e !== enterprise);
      alert('Empresa eliminada.');
    });
  }

}
