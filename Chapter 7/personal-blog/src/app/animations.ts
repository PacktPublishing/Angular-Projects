import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const postsAnimation = trigger('postsAnimation', [
    transition(':enter', [
        /* initial */
        style({ transform: 'translateY(100%)', opacity: 0 }),
        /* final */
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
      group([
          query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
      ])
  ])
]);
