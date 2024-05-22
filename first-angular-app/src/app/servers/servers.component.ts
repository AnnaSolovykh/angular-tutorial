import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',//by attribute
  //selector: '.app-servers',//by class
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit { 
  // property binding
  //Property binding allows you to set values for properties or attributes of HTML elements dynamically
  allowNewServer = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }
    ngOnInit() {

  }
}

