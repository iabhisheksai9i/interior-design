import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,InputTextModule,ButtonModule,RouterModule,CommonModule,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent {
  loginData: any=[];
  errorMessage:any;
  name:any
  password:any
  

  constructor(
    private httpService:HttpService,
    private messageService: MessageService,
    private router: Router
  ){
    // this.data()
  }

  ngOnInit(){
    // sessionStorage.setItem('islogedin','false')
  }

  data(){
  //   const data = [`${this.name}`,`${this.password}`];
  //   this.httpService.loginData(data)
  //  this.httpService.loginData('login').subscribe(res=>{
  //   this.loginData = res
  //   console.log(res)
  // });
  }

  // authenticate(username: string, password: string){
  //   const user = this.loginData.find((user: { username: string; password: string; }) => user.username === username && user.password === password);
  //   console.log(username)
  //   return !!user;
  // }

  login() {
    const data = {
      'name':`${this.name}`,
      'password':`${this.password}`
    };
    this.httpService.loginData(data).subscribe(res=>{
      if(res == null){
        console.log('Invalid credentials');
        sessionStorage.setItem('islogedin','false')
        this.errorMessage = 'Invalid username or password';
        this.messageService.add({ severity: 'error', summary: 'Wrong Info', detail: 'Incorrect Username Or Password' ,closable:false});
      }
      else{
        sessionStorage.setItem('islogedin','true')
        this.router.navigate(['/home']);
      }
      console.log(res)
    })
  }

  
}
