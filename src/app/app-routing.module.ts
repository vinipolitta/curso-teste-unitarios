import { ExtratoComponent } from './components/extrato/extrato.component';
import { GuardGuard } from './guard/guard.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpyonComponent } from './components/spyon/spyon.component';
import { StubComponent } from './components/stub/stub.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'stub',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'stub',
  //   component: StubComponent,
  //   children: [{ path: 'home', component: HomeComponent }],
  // },
  // { path: '**', component: SpyonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'extrato', component: ExtratoComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
