import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

//Angular is able to render templates without DOM, and these properties might not be available
//so this is not the best way
export class BasicHighlightDirective implements OnInit{
    constructor(private ElementRef: ElementRef) {
        ElementRef
    }
    ngOnInit() {
        this.ElementRef.nativeElement.style.backgroundColor = 'green'
    }
}