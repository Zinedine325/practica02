import { Component, ViewChild } from '@angular/core';
import { Articulo } from './interface/Articulo';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("sideBar") sideBar : SidebarComponent | undefined;

  articulosSeleccionado : Articulo = {
    Codigo: '',
    Descripcion: '',
    Precio: 0
  }

  // Método seleccionar
  seleccionarArticulo(articuloSeleccionado: Articulo) {
    console.log(articuloSeleccionado);
    this.articulosSeleccionado = articuloSeleccionado;
  }

  showSidebar(){
    this.sideBar?.cerrarSidebar();
  }

}

