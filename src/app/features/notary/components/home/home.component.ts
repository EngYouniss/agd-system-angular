import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { SidebarComponent } from "../../layouts/sidebar/sidebar.component";
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { StatisticsCardComponent } from "../../partials/statistics-card/statistics-card.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    StatisticsCardComponent,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  sidebarVisible = false;




}
