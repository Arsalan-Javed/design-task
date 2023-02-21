import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  animations:[
    trigger('btnShow', [
      state('hide', style({
        opacity: 0,
        transform: 'scale(0) translate(-50%, 0%)'
      })),
      state('show', style({
        opacity: 1,
        transform: 'scale(1) translate(0, 0)'
      })),
      transition('hide => show', animate('800ms ease-out'))
    ]),
    trigger('tags', [
      state('out', style({
        opacity: 0,
        transform: 'scale(0) translate(-60%, 0%) '
      })),
      state('in', style({
          opacity: 1,
          transform: ' scale(1) translate(0, 0)'
      })),
      transition('out => in', animate('500ms ease-out'))
    ]),
    trigger('bid', [
      state('out', style({
        opacity: 0,
        transform: 'translate(-100%, 100%) scale(0)',
      })),
      state('in', style({
        opacity: 1,
        transform: 'translate(0, 0) scale(1)',
      })),
      transition('out => in', animate('1000ms ease-out'))
    ]),
    trigger('pressEffect', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(0.9)'
      })),
      transition('initial => pressed', animate('500ms ease-in')),
      transition('pressed => initial', animate('500ms ease-out'))
    ]),
    trigger('btnPress', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(0.7)'
      })),
      transition('initial => pressed', animate('500ms ease-in')),
      transition('pressed => initial', animate('500ms ease-out'))
    ]),
  ]
})
export class StatsComponent implements OnInit {

  btnState = 'hide';
  tagsState = 'out';
  bidState = 'out';
  bidClickState = 'initial';
  backClickState = 'initial';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    let $this = this;
    this.tagsState = 'in';
    this.bidState = 'in';
    setTimeout(function(){
      $this.btnState = 'show';
    },300)
   
  }

  placeBid(){
    this.bidClickState = 'pressed';
    let $this = this;
    setTimeout(() =>{
      $this.bidClickState= 'initial';
    } 
   , 450);
  }

  back(){
    this.backClickState = 'pressed';
    let $this = this;
    setTimeout(() =>{
      $this.backClickState= 'initial';
      this._router.navigate(['home']);
    } 
   , 450);
  }

}
