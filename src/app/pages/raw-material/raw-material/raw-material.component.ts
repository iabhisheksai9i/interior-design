import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RawMaterialService } from '../raw-material.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrl: './raw-material.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, RouterModule,CardModule],
})
export class RawMaterialComponent {
 rawMaterial:any[]=[];
 doors:any[]=[]
 handel:any[]=[]

  constructor (
    private rawMaterialService:RawMaterialService
  ) {
     
   }
   ngOnInit() {
    this.getRowproduct();
  }
   getRowproduct(){
   this.rawMaterial = this.rawMaterialService.products;
   this.doors = this.rawMaterialService.doors;
   this.handel = this.rawMaterialService.handel

  }

  getObjectdada(product:any){
    this.rawMaterialService.product = product;
    }

 }