import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName="";
  //newServerContent=""
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput)//why is this undefined?
    this.serverCreated.emit({
      serverName: serverNameInput.value,//local references
      serverContent: this.serverContentInput.nativeElement.value //local refereces fetched through view child; we shouldn't change the element through this
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value    
    })
  }
}
