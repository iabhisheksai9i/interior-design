import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,InputTextModule,ButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {


  name:any;
  password:any;
  username:any;
  email_id:any

  constructor(
    private httpService:HttpService,
  ){}

  ngOnInit(){
  }

  ngAfterViewInit() {
  }
  
  sendDataToServer() {
    const data = [`${this.name}`,`${this.username}`,`${this.email_id}`,`${this.password}`];
    this.httpService.sendData(data)
    console.log()
  }

}
