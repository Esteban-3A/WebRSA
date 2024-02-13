import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './custom/components/welcome-page/welcome-page.component';
import { DashboardComponent } from './custom/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcomePage',
    pathMatch: 'full'
  },
  {
    path: 'welcomePage',
    component: WelcomePageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
