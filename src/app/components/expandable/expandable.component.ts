import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
@Input('expanded') expanded;
@Input('expandedlow') expandedlow;
@Input ('expandHeight') expandHeight;
@Input('doctor') doctor;
@Input ('available') available;
@Input('horas') horas;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit(){
   /*  this.renderer.createElement(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px'); */
  }
}
