import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {Hoteles} from 'src/app/modelos/HotelesModelo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelesService, UsuarioService]
})
export class HotelesComponent implements OnInit {
  public modelObtenerHotel: any;
  public token!: String;
  public modelAgregarHotel!: Hoteles;
  constructor(public _usuarioService: UsuarioService,
    private hotelesService: HotelesService) {
      this.token = this._usuarioService.obtenerToken();

      this.modelAgregarHotel = new Hoteles('','','','','','','', {si: '?', no: '?', Ocupadas:[]}, 
      [{nombreTipoEvento: '', nombreEvento: '', nombreServicio: ''}], '');
     }

  ngOnInit(): void {
    this.obtenerHoteles();
  }
  obtenerHoteles(){
    this.hotelesService.obtenerHotel(this.token).subscribe(
      response => {
        console.log(response.hotelEncontrado)
        this.modelObtenerHotel = response.hotelEncontrado;
      }
    )
  }

  obtenerHotelId(id: String){
    this.hotelesService.obtenerHotelId(id).subscribe(
      respons => {
        this.modelAgregarHotel = respons.hotelEncontradoId;
        console.log(respons.hotelEncontradoId);
      }
    )

  }
  agregarHotel(){
    this.hotelesService.agregarHotel(this.modelAgregarHotel, this.token).subscribe(
      response =>{
        this.obtenerHoteles();
        console.log(response)
      }
    )
  }

  editarHotel(){
    this.hotelesService.editarHotel(this.modelAgregarHotel, this._usuarioService.obtenerToken()).subscribe(
      response =>{
        this.obtenerHoteles();
        console.log(response)
      },
      error =>{
        console.log(error)
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
  eliminarHotel(id: String){
      this.hotelesService.eliminarHotel(id, this._usuarioService.obtenerToken()).subscribe(
        response=>{
          this.obtenerHoteles();
          console.log(response)
        }, 
        error =>{
          console.log(error);
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
