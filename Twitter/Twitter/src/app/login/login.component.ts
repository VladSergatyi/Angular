import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:    string = '';
  password: string = '';
  errors:   string = '';
  response: any= {};
  _URL = 'http://localhost:4000/api/login'
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(){
    this.httpClient.post(this._URL, {login:this.login, password: this.password})
    .subscribe(data => {
      this.response = data
      this.errors = this.response.errors;
    });
  }
}
