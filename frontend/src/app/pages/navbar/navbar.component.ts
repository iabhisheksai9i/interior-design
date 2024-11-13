import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,ButtonModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor() {}

  // currentRoute:string=''

  // isRouteActive(route: string): boolean {
  //   return this.currentRoute === route;
  // }

}
