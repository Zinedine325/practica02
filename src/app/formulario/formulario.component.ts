import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../interface/Articulo';
import { ArticulosService } from '../services/articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  bandera : boolean = false; // bandera para comprobar el estado de la alerta
  alerta : string = '';
  status : string = '';

  @Input() articulosSeleccionado : Articulo = {
    codigo: '',
    descripcion: '',
    precio: 0
  }

  constructor(private articulosService : ArticulosService, 
              private activatedRoute : ActivatedRoute,
              private router : Router){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.params.subscribe(params =>{
      console.log(params);
      console.log(params["id"]);
      const id = params["id"];
      this.status = id == undefined ? "agregar" : "modificar";
      this.articulosSeleccionado = id==undefined ? this.articulosSeleccionado : this.articulosService.seleccionar(id);
    });
  }

  cerrar(){
    this.bandera = false;
  }

 /* articulos : Articulo[] = [
    { codigo : "1", descripcion : "papa", precio : 10.55},
    { codigo : "2", descripcion : "manzana", precio : 12.81 },
    { codigo : "3", descripcion : "melon", precio : 52.23 },
    { codigo : "4", descripcion : "cebolla", precio : 17 },
    { codigo : "5", descripcion : "calabaza", precio : 23 }
  ];*/


  

  // Método agregar
  agregar() {
    if (this.articulosSeleccionado.codigo == '' || this.articulosSeleccionado.descripcion == '' || this.articulosSeleccionado.precio == 0)
    {
      //alert("Llene todos los campos");
      this.bandera = true;
      this.alerta = "Llene todos los campos";
      return;
    }
    /*const busqueda = this.articulos.filter(a => a.codigo == this.articulosSeleccionado.codigo)
    
    if (busqueda.length != 0) {
      // alert("No es posible que existan dos articulos con el mismo codigo");
      this.bandera = true;
      this.alerta = "No es posible que existan dos articulos con el mismo codigo";
      return;
    }*/

    if (this.articulosService.validacion(this.articulosSeleccionado)) {
      this.bandera = true;
      this.alerta = "No es posible que existan dos articulos con el mismo codigo";
      return;
    } 

    this.articulosService.agregar({
      ...this.articulosSeleccionado
    });
    this.articulosSeleccionado = {
      codigo: '',
      descripcion: '',
      precio: 0
    }
  }

  // Método modificar
  modificar() {

    Swal.fire({
      title: '¿Estás seguro de la modificación?',
      text: "No podrás revertir la decisión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, modifica el elemento'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articulosService.modificar(this.articulosSeleccionado);
        this.router.navigate(['/articulos']);
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    })
  }

  // Método regresar
  regresar() {
    this.router.navigate(['/articulos']);
  }

}
