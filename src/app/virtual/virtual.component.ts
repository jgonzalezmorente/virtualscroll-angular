import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }
  irInicio(): void {
    this.viewport.scrollToIndex( 0 );
  }

  irMitad(): void {
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }

 irFinal(): void {
   this.viewport.scrollToIndex( this.personas.length );
 }




}
