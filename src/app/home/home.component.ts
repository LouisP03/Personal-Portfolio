import { Component } from '@angular/core';
import { fadeInOutAnimation} from "../fade-in-out.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeInOutAnimation] // Apply the animation
})
export class HomeComponent {

}
