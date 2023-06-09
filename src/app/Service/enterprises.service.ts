import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Enterprise from '../Models/Enterprises';

@Injectable({
  providedIn: 'root'
})

export class EnterprisesService {

  //definimos en el constructor el HttpClient para conectarnos al backend por REST(web service)
  constructor(private http:HttpClient) { }
    
  //ruta del backend
  Url='http://127.0.0.1:8080/marathon_be/enterprises';//ruta del proyecto backend en Java
  
  // metodo para obtener datos de las empresas del backend
  getEnterprises(){
    return this.http.get<Enterprise[]>(this.Url);
  }
  
  createEnterprise(enterprise: Enterprise){
    return this.http.post<Enterprise>(this.Url, enterprise);
  }

  getEnterpriseId(id: number){
    return this.http.get<Enterprise>(`${this.Url}/${id}`);
  }

  updateEnterprise(enterprise: Enterprise){
    return this.http.put<Enterprise>(`${this.Url}/${enterprise.id}`, enterprise);
  }

  deleteEnterprise(enterprise: Enterprise){
    return this.http.delete<Enterprise>(`${this.Url}/${enterprise.id}`);
  }
}
