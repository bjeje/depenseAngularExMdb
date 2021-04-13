import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TabNineComponent } from './components/tab-nine/tab-nine.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { TotalBoxComponent } from './components/total-box/total-box.component';
import { ActualAccountComponent } from './components/actual-account/actual-account.component';
import { LitteAddSpentComponent } from './components/little-add-spent/litte-add-spent.component';
import {MatSelectModule} from '@angular/material/select';
import { LittleAddFixedComponent } from './components/little-add-fixed/little-add-fixed.component';
import { LittleAddIncomeComponent } from './components/little-add-income/little-add-income.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    RegisterFormComponent,
    LoginComponent,
    UserComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    TabNineComponent,
    LeftMenuComponent,
    TotalBoxComponent,
    ActualAccountComponent,
    LitteAddSpentComponent,
    LittleAddFixedComponent,
    LittleAddIncomeComponent
  ],
  imports: [
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
