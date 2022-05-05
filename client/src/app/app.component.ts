import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  static getBaseUrl() {
    return 'http://localhost:52892/api';
  }

  title = 'project';
}
