import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './components/pages/login/login.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { SessionStorage } from './FUNCTIONS/sessionStorage';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { EditMyProfileComponent } from './components/edit-my-profile/edit-my-profile.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyProfileComponent,
    EditMyProfileComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    SessionStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
