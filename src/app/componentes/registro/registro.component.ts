import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuarioModelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {
  public usuarioModel!: Usuario; 

  constructor(private _usuarioService: UsuarioService, private _router: Router) { 
    this.usuarioModel = new Usuario("","","","","","","");
  }

  ngOnInit(): void {
  }
  registrar(){
    this._usuarioService.registro(this.usuarioModel).subscribe(response=>{
      console.log(response);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario registrado',
        showConfirmButton: false,
        timer: 1500

      })
      this._router.navigate(['/login'])
    }, error=>{
      console.log(<any>error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Usuario Existente',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
