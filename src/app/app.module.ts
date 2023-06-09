import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaProveedoresComponent } from './tabla-proveedores/tabla-proveedores.component';
import { FormularioproveedoresComponent } from './formularioproveedores/formularioproveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    SidebarComponent,
    NavbarComponent,
    TablaProveedoresComponent,
    FormularioproveedoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
