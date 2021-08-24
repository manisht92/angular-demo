import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularDemo';

  loadedFeature: string = 'recipe';
  onNavigate(feature_name: string) {
    this.loadedFeature = feature_name;
  }
}
