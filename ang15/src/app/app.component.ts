import { Component } from '@angular/core';
import packageJson from '../../package.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang15';
   ngVersion: string = packageJson.dependencies['@angular/core'];

   constructor(private router: Router) {
  }

  ngOnInit(): void {

  }


}
