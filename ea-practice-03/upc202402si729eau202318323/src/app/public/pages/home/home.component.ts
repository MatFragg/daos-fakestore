import { Component } from '@angular/core';
import { EventsViewComponent } from '../../../registration/pages/events-view/events-view.component';

@Component({
  selector: 'app-home',
  imports: [EventsViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
