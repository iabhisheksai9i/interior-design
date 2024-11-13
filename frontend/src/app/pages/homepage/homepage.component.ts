import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarouselModule,ButtonModule,DialogModule,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  // providers:[DynamicDialogRef, DynamicDialogConfig]
})
export class HomepageComponent {

  constructor(private httpService:HttpService,
    private router: Router
  ){}
  
  Slideshow:any=[]
  ProductCategory:any=[]

  responsiveOptions: any[] | undefined;
  responsiveOptionssmall: any[] | undefined;


  ngOnInit() {
    this.fetchData();
      
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
          numVisible: 2,
          numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
  ];
}

ngAfterContentInit(){
  this.sendData()
}

  fetchData() {
    this.httpService.getData('getData').subscribe(res=>{
      this.Slideshow = res
    });
    
  }
  sendData(){
    this.httpService.getSecond('getImages').subscribe(res=>{
      if(res==null){
        this.router.navigate(['./login']);
      }else{
        this.ProductCategory = res
      }
    });

  }



}





