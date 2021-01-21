import { trigger, transition, animate, style, query } from '@angular/animations';
import { translate } from '@angular/localize/src/utils';

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ display: 'block', opacity: 0 }),
    animate('300ms ease', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms ease', style({ opacity: 0 }))
  ])]
);

export const slideVerticalAnimation = trigger('slideVertical', [
  transition(':enter', [
    style({ display: 'block', opacity: 0, transform: 'translateY(50px)'}),
    animate('300ms ease', style({opacity: 1, transform: 'translateY(0)'}))
  ]),
  transition(':leave', [
    animate('300ms ease', style({opacity: 0, transform: 'translateY(50px)'}))
  ])
]);