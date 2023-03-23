import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isShow : boolean = false; // Bandera para comprobar el estado del Sidebar
  abrirSidebar(){
  //   this.estadoSidebar = true;
  }

  cerrarSidebar(){
  //   this.estadoSidebar = false;
  this.isShow = !this.isShow;
  console.log(this.isShow);
  }
  
}
