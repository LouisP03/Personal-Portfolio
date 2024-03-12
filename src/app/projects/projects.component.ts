import { Component } from '@angular/core';
import { fadeInOutAnimation} from "../fade-in-out.animation";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [fadeInOutAnimation] // Apply the animation
})
export class ProjectsComponent {

}
