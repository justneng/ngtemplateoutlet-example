import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngtemplateoutlet-example';

  capitalizeName(name: string): string {
    if (!name || name.length == 1) {
      return name.toUpperCase();
    }
    return name.split(' ').reduce((prev, curr) => prev + ' ' + this.capitalize(curr), '');
  }

  capitalize(name: string): string {
    if (!name) {
      return name;
    }
    if (name.length == 1) {
      return name.toUpperCase();
    }
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
