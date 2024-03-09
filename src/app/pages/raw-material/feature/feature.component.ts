import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RawMaterialService } from '../raw-material.service';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, GalleriaModule, FormsModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  product: any = {}
  products: any[] = []
  id: string = '';
  responsiveOptions: any;
  @Output() valueChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  constructor(
    private rawMaterialService: RawMaterialService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
      this.responsiveOptions = [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ];
      this.getProduct()
    })
    this.products= this.rawMaterialService.products;
  }

  getProduct() {
    this.product = this.rawMaterialService.products.find(product => product.id === this.id);
  }
}
