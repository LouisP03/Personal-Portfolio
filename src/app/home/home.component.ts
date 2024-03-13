import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
export class HomeComponent implements OnInit {
  isTextVisible = false;

  toggleText() {
    this.isTextVisible = this.isTextVisible ? false : true;
  }

  ngOnInit() {
    this.toggleText();
  }

}
