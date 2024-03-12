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
 door_locks:any[]=[]
 glass_design:any[]=[]
 products:any[]=[]

  constructor (
    private rawMaterialService:RawMaterialService
  ) {
     
   }
   ngOnInit() {
    this.getRowproduct();
  }
   getRowproduct(){
   this.products = this.rawMaterialService.products;
  //  this.handel = this.rawMaterialService.handel;
  //  this.door_locks = this.rawMaterialService.door_locks;
  //  this.glass_design = this.rawMaterialService.glasses_design;
  

  }

  getObjectdada(product:any){
    this.rawMaterialService.product = product;
    }

 }