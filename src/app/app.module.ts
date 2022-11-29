import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersJasmineComponent } from './components/matchers-jasmine/matchers-jasmine.component';
import { MockServiceComponent } from './components/mock-service/mock-service.component';
import { StubComponent } from './components/stub/stub.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SpyonComponent } from './components/spyon/spyon.component';
import { RequestComponent } from './components/request/request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncComponentComponent } from './components/async-component/async-component.component';

@NgModule({
  declarations: [AppComponent, MatchersJasmineComponent, MockServiceComponent, StubComponent, HomeComponent, SpyonComponent, RequestComponent, AsyncComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
