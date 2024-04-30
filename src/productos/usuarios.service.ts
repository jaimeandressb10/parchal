import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]>{
    
    return this.http.get<Usuario[]>('https://api.escuelajs.co/api/v1/users');
  }
}
