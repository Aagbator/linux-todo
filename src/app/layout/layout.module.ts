import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class LayoutModule { }
