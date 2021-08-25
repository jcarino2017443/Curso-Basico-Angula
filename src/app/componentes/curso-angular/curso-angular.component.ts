import { Component, OnInit } from '@angular/core';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-curso-angular',
  templateUrl: './curso-angular.component.html',
  styleUrls: ['./curso-angular.component.scss'],
  providers: [RepositorioService]
})


export class CursoAngularComponent implements OnInit {

  Repositorios: any = [];
  RepositoryPrincipal: Irepositorio;
  newRepositorio: Irepositorio = {name:"", descripcion:""}

  constructor(public _repoService: RepositorioService) {
    
   }

  

  ngOnInit(): void {
    setTimeout(()=>{
      this.RepositoryPrincipal = {name: "Gaga", descripcion: "Este es el proyecto de OscarGAGA"}

    }, 3000)
    // setTimeout(()=>{
    //   this.Repositorios = [
    //     {name: "Hoteles", descripcion: "Este es un gestor de hoteles"},
    //     {name: "Animalaya", descripcion: "Este es un pueblito chiquito"},
    //     {name: "Aventurero", descripcion: "Hace referencia a la cancion de CF"},
    //     {name: "Tareas", descripcion: "Este es una aplicacion con funcion a a las treas"},
    //   ]
    // },3000)
    
    this._repoService.getResponse().subscribe(response=>{
    this.Repositorios = response;
    this.RepositoryPrincipal = this.Repositorios[5];
    })

  }

  setRepositorio(repositorio){
    this.RepositoryPrincipal = repositorio;

  }

  addNewReport(){
    this.Repositorios.unshift(this.newRepositorio);
    this.newRepositorio = {name:"",descripcion:""}
  }
  
  
}

interface Irepositorio {
  name: String,
  descripcion: String
}

