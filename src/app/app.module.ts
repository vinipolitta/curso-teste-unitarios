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
import { TestingComponentsComponent } from './components/testing-components/testing-components.component';
import { FixtureDetectChangeComponent } from './components/fixture-detect-change/fixture-detect-change.component';
import { AutoDetectChangeComponent } from './components/auto-detect-change/auto-detect-change.component';
import { FillFormComponent } from './components/fill-form/fill-form.component';
import { InputOutputComponent } from './components/input-output/input-output.component';

@NgModule({
  declarations: [AppComponent, MatchersJasmineComponent, MockServiceComponent, StubComponent, HomeComponent, SpyonComponent, RequestComponent, AsyncComponentComponent, TestingComponentsComponent, FixtureDetectChangeComponent, AutoDetectChangeComponent, FillFormComponent, InputOutputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
