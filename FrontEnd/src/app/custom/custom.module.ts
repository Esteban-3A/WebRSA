import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CoreModule } from './components/core/core.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomePageComponent
  ],
  exports: [

  ],
  imports: [
    CoreModule,
    CommonModule
  ]
})
export class CustomModule { }
