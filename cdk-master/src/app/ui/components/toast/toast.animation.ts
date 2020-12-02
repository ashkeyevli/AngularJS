import {animate, state, style, transition, trigger} from '@angular/animations';

export const TOAST_ANIMATION_STATES = [
  state('default', style({})),
  state(
    'leaving',
    style({
      width: '0px',
    })
  ),

];
export const TOAST_ANIMATION_TRANSITION = [
  transition('* => leaving', [style({overflow: 'hidden', width: '*'}), animate('700ms', style({ overflow: 'hidden', width: 0 }))]),
  transition(':enter', [
    style({
      width: 0,
    }),
    animate('700ms', style({
    width: '*',
      overflow: 'hidden',


    })
  ),
  ]),



];


export const TOAST_ANIMATION_TRIGGER = trigger('animation', [
  ...TOAST_ANIMATION_STATES,
  ...TOAST_ANIMATION_TRANSITION
]);

