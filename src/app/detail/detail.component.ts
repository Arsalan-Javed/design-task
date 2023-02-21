import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations:[
    trigger('showIcon', [
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
    trigger('btnBack', [
      state('hide', style({
        transform: 'rotate(0deg)', opacity: 0
      })),
      state('show',style({})),
      transition('hide => show',   
        animate('550ms ease-in', keyframes([
        style({ transform: 'rotate(-90deg)', opacity: 0 }),
        style({ transform: 'rotate(-80deg)', opacity: 0.1 }),
        style({ transform: 'rotate(-70deg)', opacity: 0.2 }),
        style({ transform: 'rotate(-60deg)', opacity: 0.3 }),
        style({ transform: 'rotate(-50deg)', opacity: 0.4 }),
        style({ transform: 'rotate(-40deg)', opacity: 0.5 }),
        style({ transform: 'rotate(0deg)', opacity: 1 }),
      ]))),
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
export class DetailComponent implements OnInit, AfterViewInit {

  constructor(private _router: Router) { }

  delay = 500;
  amount = 0.00
  intervalRef:any = null;
  iconState = 'hide';
  btnState = 'hide';
  backClickState = 'initial';

  ngOnInit(): void {

  }

  ngAfterViewInit(){

    let $this = this;
    setTimeout(function(){
      $this.iconState = 'show';
      $this.btnState = 'show';
      $this.intervalRef = setInterval(function(){
        $this.amount += 100.88; 
        if($this.amount >= 1576.88){
          clearInterval($this.intervalRef);
        }
      },100)
    },400)
   
  }

  get getAmount(){
    return this.amount.toFixed(2);
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