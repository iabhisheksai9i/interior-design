import { Injectable } from '@angular/core';

export interface IProduct {
  id: string,
  image?: string,
  name: string,
  price:number,
  color?: string,
  glass?: string,
  handel_color?: string,
  material?: string,
  dimension?: string,
  design?: string,
  size?: string,
  shape?: string,
}

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
  constructor() { }
  product: any = null; 
  products: IProduct[] = [
    {
      id: '1',
      image: "https://5.imimg.com/data5/ML/MU/ZQ/SELLER-8278996/glass-door-500x500.jpg",
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },

    {
      id: '2',
      image: "https://i.pinimg.com/originals/05/a6/22/05a6228e4c45eaeee3f76a227cb8effc.jpg",
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },

    {
      id: '3',
      image: "https://4.imimg.com/data4/JP/PO/MY-25195161/office-door-glass-500x500.jpg",
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },

    {
      id: '4',
      image: "https://5.imimg.com/data5/RC/OH/HM/SELLER-96289206/single-sliding-glass-door.jpg",
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },

    {
      id: '5',
      image:'https://interioricons.com/cdn/shop/products/rollover_1739_large.jpg?v=1697460746',
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },
    {
      id: '6',
      image:'https://interioricons.com/cdn/shop/files/2149-1_640x.jpg?v=1702482823',
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },
    {
      id: '7',
      image:'https://interioricons.com/cdn/shop/files/2158-2_386b930e-132f-42fa-b843-18ce114f3fd2_640x.jpg?v=1702458402',
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },
    {
      id: '8',
      image:'https://interioricons.com/cdn/shop/files/2166-1_640x.jpg?v=1703258698',
      name: 'Glass door',
      price:100,
      color: 'black',
      glass: 'designer',
      handel_color: 'silver',
      material: 'Aluminium',
      dimension: '16mm x 45mm x 1.5mm Thick',
      design: 'Sleek / Slim',
      size: '16 x 45mm',
      shape: 'Rectangular'
    },
    {
    id:'9',
    image:'https://interioricons.com/cdn/shop/files/2006-1_640x.jpg?v=1700664343',
    name:'Chair',
    price:100,
    color:'white',
    },
    {
      id:'9',
      image:'https://interioricons.com/cdn/shop/files/2571-1_640x.jpg?v=1706617078',
      name:'Chair',
      price:100,
      color:'white',
    },
    {
      id:'9',
      image:'https://interioricons.com/cdn/shop/files/1966-1_640x.jpg?v=1695123871',
      name:'Chair',
      price:100,
      color:'white',
    },
    {
      id:'9',
      image:'https://interioricons.com/cdn/shop/products/1676-1_640x.jpg?v=1674834643',
      name:'Chair',
      price:100,
      color:'white',
    }
  ]

}
