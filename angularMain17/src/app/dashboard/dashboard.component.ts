import { Component, ViewEncapsulation } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.ShadowDom

})
export class DashboardComponent {
  title = 'angularMain';

  items: WebComponentWrapperOptions[] = [
    {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
    },   
    
    {
        remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular1',
        exposedModule: './web-components',
        elementName: 'angular1-element'
    },    

    {
        remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angular2',
        exposedModule: './web-components',
        elementName: 'angular2-element'
    },   
    
    {
        remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'vue',
        exposedModule: './web-components',
        elementName: 'vue-element'
    },  
    
    {
        remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angularjs',
        exposedModule: './web-components',
        elementName: 'angularjs-element'
    },


// {
//   remoteEntry: 'http://localhost:5001/remoteEntry.js',
//   type: 'module',
//   exposedModule: './web-components',
//   elementName: 'angular15-element'
// },
// {
//   remoteEntry: 'http://localhost:5002/remoteEntry.js',
//   type: 'module',
//   exposedModule: './web-components',
//   elementName: 'angular16-element'
// } 
  ];

  angularComponent: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:5003/remoteEntry.js',
    type: 'module',
    exposedModule: './web-components',
    elementName: 'angular17-element'
  }

  data: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4204/remoteEntry.js',
    remoteName: 'react',
    exposedModule: './web-components',
    elementName: 'react1-element'
  };
  

  props = {
    messages: 'Hello from Shell',
  };

}
