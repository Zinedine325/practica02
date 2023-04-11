import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Articulo } from '../interface/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos : Articulo[] = [
    // { codigo : "1", descripcion : "papa", precio : 10.55},
    // { codigo : "2", descripcion : "manzana", precio : 12.81 },
    // { codigo : "3", descripcion : "melon", precio : 52.23 },
    // { codigo : "4", descripcion : "cebolla", precio : 17 },
    // { codigo : "5", descripcion : "calabaza", precio : 23 }
  ];
  baseUrl: string = "http://localhost:3000/api/productos/";

  constructor(private http: HttpClient) {
    
   }

  returnData() : Observable<Articulo[]>{
    //return this.articulos;
    return this.http.get<Articulo[]>(this.baseUrl);
  }

  validacion(articulo : Articulo) : boolean{
    const busqueda = this.articulos.filter(a => a.Codigo == articulo.Codigo)
    
    if (busqueda.length != 0) {
      return true;
    }
    return false;
  }

  agregar(articulo : Articulo){
    // this.articulos.push(articulo);
    const headers = { 'Content-type' : 'application/json' };
    const body = JSON.stringify(articulo);
    return this.http.post(this.baseUrl,body,{'headers': headers});
  }

  seleccionar (Id : string) : Observable<any>{
    // return this.articulos.find(art => art.Codigo == cod)!;
    return this.http.get(this.baseUrl + Id);
  }

  getIndex(articulo : Articulo){
    let index = 0;
    this.articulos.forEach(art => {
      if(articulo.Codigo == art.Codigo){
        index = this.articulos.indexOf(art)
      }
    });
    return index;
  }

  modificar(articulo : Articulo) : Observable<any>{
    // const index = this.getIndex(articulo);
    // this.articulos[index] = { ...articulo };
    const headers = { 'Content-type' : 'application/json' };
    const body = JSON.stringify(articulo);
    return this.http.put(this.baseUrl + articulo.Id, body,{'headers': headers});
  }

  eliminar(articulo : Articulo){
    // const index = this.getIndex(articulo);
    // this.articulos.splice(index,1);
    return this.http.delete(this.baseUrl + articulo.Id);
  }
}
