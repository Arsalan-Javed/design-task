import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('showFromTopLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0) translate(-50%, 0%)'
        }),
        animate('800ms ease-out', style({
          opacity: 1,
          transform: 'scale(1) translate(0, 0)'
        }))
      ])
    ]),
    trigger('showFromTopBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
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
    trigger('imageScale', [
      state('in', style({
        height: '*' ,
        display:'none'
      })),
      state('out', style({
        height: '*' 
      })),
      transition('* => in',  animate('300ms ease-out', style({ transform: 'scale(1)' }))),
      transition('* => out',  animate('300ms ease-in', style({ transform: 'scale(0)' }))),

    ]),
    trigger('headerHide', [
      state('out', style({
        height: 0, opacity: 0, display:'none'
      })),
      state('in', style({
        height: '*' 
      })),
      transition('in => out', animate('300ms ease-in', style({ height: 0, opacity: 0 }))),
    ]),
    trigger('detailView', [
      state('out', style({
        height: 0, opacity: 0, display:'none'
      })),
      transition('* => out', animate('300ms ease-out', style({  opacity: 0 }))),
    ]),
    trigger('detailFooterView', [
      state('down', style({
        scale: 0, opacity: 0, display:'none'
      })),
      transition('* => down', animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-50px)' }))),
    ]),
    
  ]
}) 
export class HomeComponent implements OnInit {

  state = 'initial';
  
  items = [{
      id: 1, state:'initial', count: 0.40, time: '07:24:12', detailState: '', detailFooterState :'', imageState :''
    },{
      id: 2, state:'initial', count: 0.50, time: '07:24:12', detailState: '', detailFooterState :'', imageState :''
    },{
      id: 3, state:'initial', count: 0.60, time: '07:24:12', detailState: '', detailFooterState :'', imageState :''
    },{
      id: 4, state:'initial', count: 0.70, time: '07:24:12', detailState: '', detailFooterState :'', imageState :''
    }]

    headerState = 'in';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openStats(item:any) {
    item.state = 'pressed';
    let $this = this;
    setTimeout(() =>{
      item.state = 'initial';

      setTimeout(() =>{
        $this.toggleAnimation(item);
        this._router.navigate(['stats']);
      } 
     , 450);
    } 
   , 450);
  }

  toggleAnimation(item:any) {
    this.headerState = 'out';
    item.imageState =  'in';
    item.detailFooterState =  'down';
    this.items.forEach((element:any) => {
       if(element.id!=item.id)
          element.detailState = 'out';  
    });
  }

}
