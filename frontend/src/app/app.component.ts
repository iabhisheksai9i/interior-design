import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpService } from './Services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomepageComponent,FooterComponent, HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpService]
})
export class AppComponent {
  title = 'shop';
}
