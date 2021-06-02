import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuarioModelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarioList: any;
  public usuarioIdModel: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioIdModel = new Usuario("","","","","","","");
   }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(response=>{
      console.log(response.users);
      this.usuarioList = response.users;
    }, error=>{
      console.log(<any>error)
    })
  }

  obtenerUsuarioId(id:any){
    this._usuarioService.obtenerUsuarioId(id).subscribe(
      response =>{
        this.usuarioIdModel = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado);

      }
    )
  }

  editarUSuario(){
    this._usuarioService.editarUSuario(this.usuarioIdModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuarios();
      },
      error =>{
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
  
        })
        
      }
      
    )
  }
  
  eliminarUsersAdmin(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response=>{
        console.log(response)
        this.obtenerUsuarios();
      }, error=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
  
        })
      }
    )
  }

}
