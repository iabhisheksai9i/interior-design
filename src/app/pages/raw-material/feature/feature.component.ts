import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RawMaterialService } from '../raw-material.service';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  product:any=[]
  constructor(
    private rawmaterial:RawMaterialService
  ){
    this.getProduct()
  }

  getProduct(){
    this.product=this.rawmaterial.data()
  }
}
