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

  enterprises:Enterprise = new Enterprise(); 
  constructor( private router:Router, private service:EnterprisesService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createEnterprise(this.enterprises)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["listar"]);
    })
  }
}
