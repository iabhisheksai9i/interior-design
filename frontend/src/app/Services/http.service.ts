import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

getdata:any=[]
getsecond:any=[]
products:any=[]
loginArray:any=[]
Alert=false



  baseUrl = "http://192.168.1.50:5000/"

  constructor(private http: HttpClient) { 
    
  }
  

  getData(url: string) {
    const data = this.http.get(this.baseUrl + url)
    return data;
  }

  getSecond(url:string){
    const images = this.http.get(this.baseUrl + url)
    return images;
  }

  getProducts(url:string){
    const Product = this.http.get(this.baseUrl + url)
    return Product;
  }

  loginData(data:any){
    const login =this.http.post(this.baseUrl + 'login',data)
    return login;
  }

  sendData(data: any){
    console.log(data)
   const register =  this.http.post(this.baseUrl + 'postData', data).subscribe(response=>{
      response
    })
    return register;
  }

  addProducts(data: any){
   const product =  
   this.http.post(this.baseUrl + 'addproducts', data).subscribe(response=>{
    if(response === null){
      console.log(response)
    this.Alert=false
    console.log(false)
   }else{
    this.Alert=true
    console.log(true)
    console.log(response)
   }
   })
    return product;
  }

}
