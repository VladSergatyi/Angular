import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    _url = 'http://localhost:4000/api/login'
    name: string = '';
    constructor(private httpClient: HttpClient){}
    key(event:any){
      this.name = event.target.value
    }
    getProfile(){
      this.httpClient.post(this._url,{name: 'Vlad'}).subscribe(data => {
        console.log(data)
      })
    }
  }
