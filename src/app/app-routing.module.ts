import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpyonComponent } from './components/spyon/spyon.component';
import { StubComponent } from './components/stub/stub.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
