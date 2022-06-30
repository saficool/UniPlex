import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconbarComponent } from './iconbar/iconbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IconbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
