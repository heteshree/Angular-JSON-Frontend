import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummaryViewComponent } from "./summary-view/summary-view.component";
import { DetailedViewComponent } from "./detailed-view/detailed-view.component";
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SummaryViewComponent, DetailedViewComponent,MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoadConstructionApp';
}
