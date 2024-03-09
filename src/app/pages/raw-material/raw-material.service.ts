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
      id:'1',
      name:'light Brown Door',
      image:'https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg"',
      price:100,
    },
    {
      id:'2',
      name:'light Brown Door',
      image:'https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg',
      price:100,
    },
    {
      id:'3',
      name:'light Brown Door',
      image:'https://saina-doors.com/wp-content/uploads/2024/01/image-3.jpg',
      price:100,
    },
    {
      id:'4',
      name:'light Brown Door',
      image:'https://saina-doors.com/wp-content/uploads/2024/01/image-4.jpg',
      price:100,
    },
    {
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
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
      id: '11',
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
      id: '12',
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
    id:'13',
    image:'https://interioricons.com/cdn/shop/files/2006-1_640x.jpg?v=1700664343',
    name:'Chair',
    price:100,
    color:'white',
    },
    {
      id:'14',
      image:'https://interioricons.com/cdn/shop/files/2571-1_640x.jpg?v=1706617078',
      name:'Chair',
      price:100,
      color:'white',
    },
    {
      id:'15',
      image:'https://interioricons.com/cdn/shop/files/1966-1_640x.jpg?v=1695123871',
      name:'Chair',
      price:100,
      color:'white',
    },
    {
      id:'16',
      image:'https://interioricons.com/cdn/shop/products/1676-1_640x.jpg?v=1674834643',
      name:'Chair',
      price:100,
      color:'white',
    }
  ]

  

  handel=[
    {
      image:'https://m.media-amazon.com/images/I/81CPZ8lW1vL._AC_UF1000,1000_QL80_.jpg',
      name:'Lotus Door Handles',
    },
    {
      image:'https://rukminim2.flixcart.com/image/850/1000/l0cr4i80/knob-handle/r/f/t/matte-cool-md-12-m-lapo-original-imagc5js58qhaqzx.jpeg?q=90&crop=false',
      name:'LAPO Cool Door Handles'
    },
    {
      image:'https://m.media-amazon.com/images/I/81t3jEg2TfL._AC_UF1000,1000_QL80_.jpg',
      name:'Lotus Door Handles',
    },
    {
      image:'https://m.media-amazon.com/images/I/516Amgkl-kL._AC_UF1000,1000_QL80_.jpg',
      name:'LAPO Orra 12 Inch Stainless Steel',
    },
  ]
  door_locks=[
    {
      image:'https://m.media-amazon.com/images/I/91LESwmw7+L._AC_UF1000,1000_QL80_.jpg',
      name:'Vino Heavy Duty Mortise ',
    },
    {
      image:'https://www.jiomart.com/images/product/original/rvnkygpboj/screwtight-8-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-1099-ky-bl-zbrg-product-images-orvnkygpboj-p605545332-0-202310110732.jpg?im=Resize=(1000,1000)',
      name:'ScrewTight 8" Heavy Duty Mortise',
    },
    {
      image:'https://www.jiomart.com/images/product/original/rvjznz2bzn/screwtight-heavy-duty-mortise-handle-door-locks-for-main-door-bullet-door-lock-body-with-3-key-double-action-mortise-lock-for-door-door-locks-for-home-azmph-005-ky-ba-product-images-orvjznz2bzn-p605676166-0-202310200744.jpg?im=Resize=(420,420)',
      name:'ScrewTight Heavy Duty Mortise',
    },
    {
      image:'https://m.media-amazon.com/images/I/91LESwmw7+L._AC_UF1000,1000_QL80_.jpg',
      name:'Vino Heavy Duty Mortise ',
    },
  ]

  glasses_design=[
    {
      image:'https://5.imimg.com/data5/DB/OX/MY-87496/untitled-1-500x500.jpg',
      name:'Dom Glass Printed Glass Door Mirror',
    }
  ]

}
