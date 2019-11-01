import { Component, OnInit } from '@angular/core';
import { MatesService } from "../mates.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private server:MatesService) { }
  public localdata=[];
  public userEmail=[];

  onLogin(form){
    console.log(form.value);
    this.userEmail=form.value.email;
    localStorage.setItem('email',JSON.stringify(this.userEmail));
    this.localdata=JSON.parse(localStorage.getItem('email')) ;

    this.server.setUser(form.value)
    .subscribe(Response=>console.log('success',Response),error=>console.log('error occured',error));

  }

  ngOnInit() {
  }

}
