import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user-service';

import { HomePage } from '../home/home';
import { CatalogPage } from '../catalog/catalog';
import { MainMenuPage } from '../main-menu/main-menu';

import { User } from '../../app/user';

/**
 * Generated class for the SideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{title: string, component: any, icon: string}>;
  pageExit: {title: string, component: any, icon: string};
  user: User;
  user_id: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public menu: MenuController,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public platform: Platform, 
    private userServiceProvider: UserServiceProvider, 
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.user = new User();
    this.storage.get('id').then( (data) => {
      this.user_id = data;
      this.inicio();
      this.rootPage = MainMenuPage;
    });

    this.pages = [
    { title: 'Menu', component: MainMenuPage, icon:"home" },
    { title: 'Catalog', component: CatalogPage, icon: "book"},
    ];
    this.pageExit = { title: 'LogOut', component: HomePage, icon: "exit" };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  inicio(){
  //this.userServiceProvider.getUsuario(this.nick).subscribe( data => {
  //  console.log("**** GET USUARIO *****", JSON.stringify(data));
  //  this.usuario = data;
  //  this.foto = this.usuario.imagen;
  //  this.horas = this.usuario.horasUsuario;
  //  this.estrellas = this.usuario.estrellas;
  //  console.log("Side nick en data" + data.nick);
  //});
  }
  goExit(){
    this.showConfirm();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'LogOut',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.storage.remove('id');
            //this.menu.close();
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
