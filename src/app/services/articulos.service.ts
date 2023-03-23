import { Injectable } from '@angular/core';
import { Articulo } from '../interface/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos : Articulo[] = [
    { codigo : "1", descripcion : "papa", precio : 10.55},
    { codigo : "2", descripcion : "manzana", precio : 12.81 },
    { codigo : "3", descripcion : "melon", precio : 52.23 },
    { codigo : "4", descripcion : "cebolla", precio : 17 },
    { codigo : "5", descripcion : "calabaza", precio : 23 }
  ];

  constructor() { }

  returnData(){
    return this.articulos;
  }

  validacion(articulo : Articulo) : boolean{
    const busqueda = this.articulos.filter(a => a.codigo == articulo.codigo)
    
    if (busqueda.length != 0) {
      return true;
    }
    return false;
  }

  agregar(articulo : Articulo){
    this.articulos.push(articulo);
  }

  seleccionar (cod : string) : Articulo{
    return this.articulos.find(art => art.codigo == cod)!;
  }

  getIndex(articulo : Articulo){
    let index = 0;
    this.articulos.forEach(art => {
      if(articulo.codigo == art.codigo){
        index = this.articulos.indexOf(art)
      }
    });
    return index;
  }

  modificar(articulo : Articulo){
    const index = this.getIndex(articulo);
    this.articulos[index] = { ...articulo };
  }

  eliminar(articulo : Articulo){
    const index = this.getIndex(articulo);
    this.articulos.splice(index,1);
  }
}
