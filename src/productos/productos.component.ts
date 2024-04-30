import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraMenuComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class AppComponent implements OnInit{
  title = 'mi-app';
  existeUsuario: boolean = true;
  listadoUsuarios: Usuario[] = [];
  constructor(private usuariosService: UsuariosService) {
    this.existeUsuario = true;
  }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe({
      next:(value:Usuario[])=>{
        console.log(value);
        this.listadoUsuarios = value;
      }
    });
  }
}