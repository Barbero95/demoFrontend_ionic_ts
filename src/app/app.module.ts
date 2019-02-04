import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule}    from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { RegisterPage } from '../pages/register/register';
import { CatalogPage } from '../pages/catalog/catalog';

import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuPage,
    MainMenuPage,
    RegisterPage,
    CatalogPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuPage,
    MainMenuPage,
    RegisterPage,
    CatalogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
