import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../interface/Proveedor';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})
export class TablaProveedoresComponent {

  //@Output() articuloSeleccionadoEmitter = new EventEmitter();

  proveedorSeleccionado : Proveedor = {
    Id: 0,
    CodigoProveedor: '',
    RazonSocial: '',
    Rfc: '',
    Direccion: '',
    Email: ''
  }

   constructor(private proveedorService : ProveedoresService, private router : Router){
     console.log("Soy el constructor");
    //  this.proveedores = this.proveedorService.returnData();
    this.cargarData();
   }

  proveedores : Proveedor[] = [
    // { id : 1, codigoProveedor : "1111", razonSocial : "Ejemplo SA de CV", rfc : "HCSFSA213", direccion: "Las Villas, 324", email: "proveedor1@gmail.com"},
    // { id : 2, codigoProveedor : "2222", razonSocial : "Ejemplo SA de CV", rfc : "HCSFSA213", direccion: "Las Villas, 324", email: "proveedor2@gmail.com"},
    // { id : 3, codigoProveedor : "3333", razonSocial : "Ejemplo SA de CV", rfc : "HCSFSA213", direccion: "Las Villas, 324", email: "proveedor3@gmail.com"},
    // { id : 4, codigoProveedor : "4444", razonSocial : "Ejemplo SA de CV", rfc : "HCSFSA213", direccion: "Las Villas, 324", email: "proveedor4@gmail.com"},
    // { id : 5, codigoProveedor : "5555", razonSocial : "Ejemplo SA de CV", rfc : "HCSFSA213", direccion: "Las Villas, 324", email: "proveedor5@gmail.com"}
  ];


  // Método seleccionar
  seleccionar(proveedor: Proveedor) {
    this.proveedorSeleccionado = {
      ...proveedor
     
      //Imprime todos los atributos de la interfaz Articulo
    };
    // this.articuloSeleccionadoEmitter.emit(this.articulosSeleccionado);
    this.router.navigate([`modificarproveedor/${proveedor.Id}`]);

  }

  cargarData(){
    this.proveedorService.returnData().subscribe((data)=>{
    console.log(data);
    this.proveedores = data;
    });
  }

  // Método borrar
  borrar(proveedor: Proveedor) {
    const confirmacion = confirm(`¿Esta seguro de querer borrar el proveedor ${proveedor.Id}?`)
    if (confirmacion) {
     // 'Filter' me permite retornar un nuevo arreglo
     // this.articulos = this.articulos.filter(a => a.codigo != articulo.codigo);
    //  this.proveedorService.eliminar(proveedor);
    this.proveedorService.eliminar(proveedor).subscribe(data => {
      console.log(data);
      this.cargarData();
    });
    return;
    }
  }

}
