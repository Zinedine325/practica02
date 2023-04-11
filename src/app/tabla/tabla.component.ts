import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../interface/Articulo';
import { ArticulosService } from '../services/articulos.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @Output() articuloSeleccionadoEmitter = new EventEmitter();

  articulosSeleccionado : Articulo = {
    Codigo: '',
    Descripcion: '',
    Precio: 0
  }

  constructor(private articuloService : ArticulosService, private router : Router){
    console.log("Soy el constructor");
    // this.articulos = this.articuloService.returnData();
    this.cargarData();
  }

  articulos : Articulo[] = [
    // { codigo : "1", descripcion : "papa", precio : 10.55},
    // { codigo : "2", descripcion : "manzana", precio : 12.81 },
    // { codigo : "3", descripcion : "melon", precio : 52.23 },
    // { codigo : "4", descripcion : "cebolla", precio : 17 },
    // { codigo : "5", descripcion : "calabaza", precio : 23 }
  ];


  // Método seleccionar
  seleccionar(articulo: Articulo) {
    this.articulosSeleccionado = {
      ...articulo
     
      //Imprime todos los atributos de la interfaz Articulo
    };
    // this.articuloSeleccionadoEmitter.emit(this.articulosSeleccionado);
    this.router.navigate([`modificararticulo/${articulo.Id}`]);

  }

  cargarData(){
    this.articuloService.returnData().subscribe((data)=>{
    console.log(data);
    this.articulos = data;
    });
  }


  // Método borrar
  borrar(articulo: Articulo) {
    const confirmacion = confirm(`¿Esta seguro de querer borrar el articulo ${articulo.Descripcion}?`)
    if (confirmacion) {
     // 'Filter' me permite retornar un nuevo arreglo
     // this.articulos = this.articulos.filter(a => a.codigo != articulo.codigo);
    //  this.articuloService.eliminar(articulo);
      this.articuloService.eliminar(articulo).subscribe(data => {
        console.log(data);
        this.cargarData();
      });
      return;
    }
  }

}
