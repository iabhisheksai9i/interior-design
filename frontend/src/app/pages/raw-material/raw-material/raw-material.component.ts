import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Route, Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { HttpService } from '../../../Services/http.service';
import { DialogModule } from 'primeng/dialog';
import { FormsModule,FormControl,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-raw-material',
  standalone: true,
  imports: [CommonModule,ButtonModule,RouterModule,CardModule,DialogModule,InputTextModule,TooltipModule,FormsModule,ReactiveFormsModule,ToastModule],
  templateUrl: './raw-material.component.html',
  styleUrl: './raw-material.component.scss',
  providers: [MessageService]
})
export class RawMaterialComponent {

  profileForm = new FormGroup({
    rowId: new FormControl(''),
    name: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    dimentions: new FormControl('',Validators.required),
    shape: new FormControl('',Validators.required),
    handel_color: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    material: new FormControl('',Validators.required),
  });


 products:any=[]
 ids:any
 buttonVisible = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('islogedin');
 buttonhide:any
 visible: boolean = false;
 

  constructor (
    private httpService:HttpService,
    private router:Router,
    private messageService: MessageService,
  ) {
    
  }
   ngOnInit() {
    this.fetchData();
    if(this.buttonVisible==='false'){
      this.buttonhide = false
    }else if(this.buttonVisible === 'true') {
       this.buttonhide = true
    }
  }

  fetchData() {
    this.httpService.getProducts('getProducts').subscribe(res=>{
      if(res==null){
        this.router.navigate(['./login']);
      }else{
        this.products = res
      }
    });
  }

  showDialog(id:number) {
    this.visible = true;
    this.ids= id
}

addObject(){
  this.profileForm.get('rowId')?.setValue(this.ids)
  const data= this.profileForm.value
  console.log(this.profileForm.value)
  console.log(this.ids)
  this.httpService.addProducts(data)
  if(this.httpService.Alert == false){
    this.messageService.add({ severity: 'error', summary: 'Wrong Info', detail: 'Product Not Added' ,closable:false});
  }else{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product Added Successfully' ,closable:false});
  }
}
 }