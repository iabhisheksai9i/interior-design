import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RawMaterialService } from '../raw-material.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  product: any = {}
  id: string = '';

  constructor(
    private rawmaterialService: RawMaterialService,
    private activatedRoute: ActivatedRoute,
    ) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
      this.getProduct()
    })
  }

  getProduct() {
   this.product = this.rawmaterialService.products.find(product => product.id === this.id);
  }
}
