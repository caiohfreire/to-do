import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { AppComponent } from './app.component';
import { SignInModule } from './screens/sign-in/sign-in.module';
import { SignupModule } from './screens/sign-up/signup.module';
import { DashboardModule } from './screens/dashboard/dashboard.module';
import { VitalTaskModule } from './screens/vital-task/vital-task.module';
import { SettingsModule } from './screens/settings/settings.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    SignInModule,
    SignupModule,
    DashboardModule,
    VitalTaskModule,
    SettingsModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
