import {
    transition,
    trigger,
    query,
    style,
    animate,
    group
 } from '@angular/animations';
 export const slideInAnimation =
    trigger('routeAnimations', [
         transition('home => detail', [
              query(':enter, :leave', 
                   style({ position: 'fixed',  width: '100%' }), 
                   { optional: true }),
              group([
                   query(':enter', [
                       style({ transform: 'translateX(100%)' }), 
                       animate('0.6s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('0.6s ease-in-out', 
                       style({ transform: 'translateX(-100%)' }))
                       ], { optional: true }),
               ])
         ]),
         transition('detail => home', [
               query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),
               group([
                   query(':enter', [
                       style({ transform: 'translateX(-100%)' }),
                       animate('0.6s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('0.6s ease-in-out', 
                        style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
               ])
        ]),
        transition('home => stats', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms ease-out', style({ transform: 'scale(1)' , opacity: 1 })),
                transition('* => *',  animate('1200ms ease-out', style({ transform: 'scale(1)' }))),
              ]),
        ]),
        transition('stats => home', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.6s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                     style({ transform: 'translateX(0%)' }),
                     animate('0.6s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
     ]),
 ]);