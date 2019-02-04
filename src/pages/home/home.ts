import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import { Login } from '../../app/login';
import { User } from '../../app/user';

import { RegisterPage } from '../register/register';
import { SideMenuPage } from '../side-menu/side-menu';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;
  login: Login;
  user: User;

  constructor(public navCtrl: NavController,
    private userServiceProvider: UserServiceProvider,
    public storage: Storage,
    public alertCtrl: AlertController,
  ) {
    this.login = new Login();
    this.user = new User();
  }
  
  gologin() {
    this.login = {
      email: this.email,
      password: this.password
    }
    this.userServiceProvider.login(this.login).subscribe( (data) => {
      if (data.email === this.email){
        this.storage.set('id', data.id).then ( () => {
          this.navCtrl.setRoot(SideMenuPage);
        });
      }else{
        this.showAlert();
      }
    });
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Incorrect email or password',
      buttons: ['OK']
    });
    alert.present();
  }

}
