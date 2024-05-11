import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
        type: 'script',
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
    } as WebComponentWrapperOptions
    },

    {
        path: 'angular1',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
            remoteName: 'angular1',
            exposedModule: './web-components',
            elementName: 'angular1-element'
        } as WebComponentWrapperOptions
    },

    {
        path: 'angular2',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
            remoteName: 'angular2',
            exposedModule: './web-components',
            elementName: 'angular2-element'
        } as WebComponentWrapperOptions
    },

    {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
        type: 'script',
        remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular3',
        exposedModule: './web-components',
        elementName: 'angular3-element'
    } as WebComponentWrapperOptions
    },

    {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
        type: 'script',
        remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'vue',
        exposedModule: './web-components',
        elementName: 'vue-element'
    } as WebComponentWrapperOptions
    },

    {
    path: 'angularjs',
    component: WebComponentWrapper,
    data: {
        type: 'script',
        remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angularjs',
        exposedModule: './web-components',
        elementName: 'angularjs-element'
    } as WebComponentWrapperOptions
    },
    {
        path: 'angular13',
        component: WebComponentWrapper,
        data: {
            type: 'module',
            remoteEntry: 'http://localhost:5001/remoteEntry.js',
            exposedModule: './web-components',
            elementName: 'angular13-element'
        } as WebComponentWrapperOptions
    },
    {
        path: 'angular15',
        component: WebComponentWrapper,
        data: {
            type: 'module',
            remoteEntry: 'http://localhost:5001/remoteEntry.js',
            exposedModule: './web-components',
            elementName: 'angular15-element'
        } as WebComponentWrapperOptions
    },
    {
        path: 'angular16',
        component: WebComponentWrapper,
        data: {
            type: 'module',
            remoteEntry: 'http://localhost:5002/remoteEntry.js',
            exposedModule: './web-components',
            elementName: 'angular16-element'
        } as WebComponentWrapperOptions
    },
    {
        path: 'angular17',
        component: WebComponentWrapper,
        data: {
            type: 'module',
            remoteEntry: 'http://localhost:5003/remoteEntry.js',
            exposedModule: './web-components',
            elementName: 'angular17-element'
        } as WebComponentWrapperOptions
    },
    {
        path: '',
        component : DashboardComponent
    }

        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
