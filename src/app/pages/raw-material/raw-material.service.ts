import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
constructor() { }
  products:any=[
    { id:'1',
      image:"https://5.imimg.com/data5/ML/MU/ZQ/SELLER-8278996/glass-door-500x500.jpg",
      name:'Glass door',
      color:'black',
      glass:'designer',
      handel_color:'silver',
      material:'Aluminium',
      dimension:'16mm x 45mm x 1.5mm Thick',
      design:'Sleek / Slim',
      size:'16 x 45mm',
      shape:'Rectangular'
    },

    {
      id:'2',
      image:"https://i.pinimg.com/originals/05/a6/22/05a6228e4c45eaeee3f76a227cb8effc.jpg",
      name:'Glass door',
      color:'black',
      glass:'designer',
      handel_color:'silver',
      material:'Aluminium',
      dimension:'16mm x 45mm x 1.5mm Thick',
      design:'Sleek / Slim',
      size:'16 x 45mm',
      shape:'Rectangular'
    },

    {
      id:'3',
      image:"https://4.imimg.com/data4/JP/PO/MY-25195161/office-door-glass-500x500.jpg",
      name:'Glass door',
      color:'black',
      glass:'designer',
      handel_color:'silver',
      material:'Aluminium',
      dimension:'16mm x 45mm x 1.5mm Thick',
      design:'Sleek / Slim',
      size:'16 x 45mm',
      shape:'Rectangular'
    },

    {
      id:'4',
      image:"https://5.imimg.com/data5/RC/OH/HM/SELLER-96289206/single-sliding-glass-door.jpg",
      name:'Glass door',
      color:'black',
      glass:'designer',
      handel_color:'silver',
      material:'Aluminium',
      dimension:'16mm x 45mm x 1.5mm Thick',
      design:'Sleek / Slim',
      size:'16 x 45mm',
      shape:'Rectangular'
    }
  ]

getRowproduct(){
  return this.products
}

}
