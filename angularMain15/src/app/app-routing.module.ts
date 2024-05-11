import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
    path: 'angularmf',
    component: WebComponentWrapper,
    data: {
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './web-components',
        elementName: 'angular3-element'
    } as WebComponentWrapperOptions
    },
    // {
    //     path: 'angular',
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         loadChildren: () => loadRemoteModule({
    //           remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //           type: 'module',
    //           exposedModule: './app',
    //         })
    //         .then(m => m.AppModule)
    //       }
       
    //     ]
     
    //     },
        {
            path: 'a1',
            component: WebComponentWrapper,
            data: {
              type: 'module',
              remoteEntry: 'http://localhost:4203/remoteEntry.js',
              exposedModule: './web-components',
              elementName: 'angularelement'
            } as WebComponentWrapperOptions
        },
        {
            path: 'angular13',
            component: WebComponentWrapper,
            data: {
              type: 'module',
              remoteEntry: 'http://localhost:4202/remoteEntry.js',
              exposedModule: './web-components',
              elementName: 'angular3-element'
            } as WebComponentWrapperOptions
        },
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
