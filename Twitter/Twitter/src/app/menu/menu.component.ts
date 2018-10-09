import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() signin = new EventEmitter<any>();
  @Output() sign = new EventEmitter<any>();
  signUp(){
    this.sign.emit();
  }
  signIn(){
    this.signin.emit();
  }
}
