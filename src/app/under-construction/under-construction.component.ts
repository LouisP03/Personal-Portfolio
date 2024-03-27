import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css',
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),
      transition(':leave', [
        animate(600, style({opacity: 0}))
      ]),
    ])
  ],
})
export class UnderConstructionComponent {

}
