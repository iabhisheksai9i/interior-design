import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RawMaterialService } from '../raw-material.service';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { HttpService } from '../../../Services/http.service';
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, GalleriaModule, FormsModule,  BreadcrumbModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  product:any=[]
  products:any=[]
  id: string = '';

  responsiveOptions: any;
  @Output() valueChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  items: MenuItem[] = [
    { label: 'Home', icon:'',routerLink:'/home' }, 
    { label: 'Raw material' ,routerLink:'/raw-material'}
  ];
  
  constructor(
    // private rawMaterialService: RawMaterialService,
    private activatedRoute: ActivatedRoute,
    private httpService:HttpService 
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
 
      this.fetchData();
      // this.getProducts();

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
     
    })
  }


    fetchData() {
    this.httpService.getProducts('getProducts').subscribe(res=>{
      this.products = res;
      this.products.forEach((product: { details: { items: any[]; }; })=>{
        if(product.details){
        product.details.items.find((item: { id: string; }) => {
       if(item.id == this.id) {
         this.product=item
       };
     });
   }
 });
    });
  }


//   getProducts(){
//        this.products.forEach((product: { details: { items: any[]; }; })=>{
//        if(product.details){
//        product.details.items.find((item: { id: string; }) => {
//       if(item.id == this.id) {
//         this.product=item
//         console.log(item)
//       };
//     });
//   }
// });
// console.log(this.products)
      
// }




//   getProduct() {
//        let data= this.httpService.products.forEach((product: { detail: any[]; }) =>{product.detail
//         let alldata = product.detail.forEach((product)=>{product.items
//        if(product.detail){
//        product.detail.find((item:any) => {
//       if(item.id == this.id) {
//         this.product=item
//         console.log(this.products)
//       };
//     })
//   }
// })
// });
      
//   }
// }
}
