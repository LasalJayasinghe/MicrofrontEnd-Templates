import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleFederationToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
