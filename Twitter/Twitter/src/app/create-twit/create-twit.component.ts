import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css']
})
export class CreateTwitComponent implements OnInit {
  title:   string = '';
  context: string = '';
  array = [];
  _URLFind = 'http://localhost:4000/api/findNote';
  _URLNote = 'http://localhost:4000/api/note';
  constructor(private http: HttpClient) { }
  Object = Object;
  arrayNote: object[] = [];
  ngOnInit() {
    this.http.post(this._URLFind, {})
    .subscribe(data => {
      for(let key in data) {
        this.arrayNote[this.arrayNote.length] = data[key]
      }
    })
  }
  onSubmitNote(){
    this.http.post(this._URLNote, {title: this.title, context: this.context})
    .subscribe(response => {
      this.arrayNote.unshift(response)
      this.title = '';
      this.context = '';
    })
  }
}
