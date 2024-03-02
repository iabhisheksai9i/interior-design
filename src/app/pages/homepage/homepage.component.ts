import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarouselModule,ButtonModule,DialogModule,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  providers:[DynamicDialogRef, DynamicDialogConfig]
})
export class HomepageComponent {


  visible = false;
  product1:any={}

  responsiveOptions: any[] | undefined;
  responsiveOptionssmall: any[] | undefined;


  products:any=[
    {
      image:'https://5.imimg.com/data5/ML/MU/ZQ/SELLER-8278996/glass-door-500x500.jpg',
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
      image:"https://i.pinimg.com/originals/05/a6/22/05a6228e4c45eaeee3f76a227cb8effc.jpg"
    },
    {
      image:"https://4.imimg.com/data4/JP/PO/MY-25195161/office-door-glass-500x500.jpg"
    },
    {
      image:"https://5.imimg.com/data5/RC/OH/HM/SELLER-96289206/single-sliding-glass-door.jpg"
    },
  ]

  latestdesign:any=[
    {
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
      image:"https://i.pinimg.com/originals/05/a6/22/05a6228e4c45eaeee3f76a227cb8effc.jpg"
    },
    {
      image:"https://4.imimg.com/data4/JP/PO/MY-25195161/office-door-glass-500x500.jpg"
    },
    {
      image:"https://5.imimg.com/data5/RC/OH/HM/SELLER-96289206/single-sliding-glass-door.jpg"
    },
  ]

  clinic:any=[
    {
      image:'https://th.bing.com/th/id/R.e8f431b9e3e91c3a11f57f9a52fd01e1?rik=8TbgsdLzX5homQ&riu=http%3a%2f%2fwww.skomdoor.com%2fuploadfile%2fuserfiles%2fimage%2f20180901%2f20180901222138_33834.jpg&ehk=XpWD5UMFH%2bwdQpZoxCi6eJjzGZ8JlcmlnGooEgJC0bQ%3d&risl=&pid=ImgRaw&r=0',
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
      image:'https://th.bing.com/th/id/OIP.c7m9SVVk8M30Cu8rswiwjwHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3'
    },
    {
      image:'https://i.pinimg.com/originals/bd/4c/b9/bd4cb983bb1cc50947fe3c6ed162a890.jpg'
    },
    {
      image:'https://i.pinimg.com/originals/bd/4c/b9/bd4cb983bb1cc50947fe3c6ed162a890.jpg'
    }

  ]

  showDialog(product:any){
    this.visible=true
    this.product1=product
  }

  ngOnInit() {
        this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '700px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    this.responsiveOptionssmall = [
      {
          breakpoint: '1400px',
          numVisible: 4,
          numScroll: 1
      },
      {
          breakpoint: '1220px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '700px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

}





