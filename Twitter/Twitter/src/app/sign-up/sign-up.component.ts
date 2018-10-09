import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  login: string = '';
  password: string = '';
  cPassword: string = '';
  errors:   string = '';
  data: any;
  _URLSignUp = 'http://localhost:4000/api/signUp'
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  signUpForm(){
    this.http.post(this._URLSignUp, {login: this.login, password: this.password, cPassword: this.cPassword})
    .subscribe(response => {
      this.data = response;
      this.errors = this.data.errors;
    })
  }
}
