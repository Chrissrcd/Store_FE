import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {EnterprisesService} from '../../Service/enterprises.service';
import Enterprise from 'src/app/Models/Enterprises';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddEnterprisesComponent {

  enterprise:Enterprise = new Enterprise(); 
  constructor( 
    private router:Router, 
    private service:EnterprisesService,
  ) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.enterprise.createdBy = 'Admin'; // Asignar el valor de createdBy
    this.enterprise.createDate = new Date(); // Asignar la fecha actual
    this.enterprise.modifiedBy = 'Admin';
    this.enterprise.modifiedDate = new Date();
    this.service.createEnterprise(this.enterprise)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["enterprises"]);
    })
  }
}
