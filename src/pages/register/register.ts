import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name: string;
  surname: string;
  email;
  password;
  public todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  logForm(){
    console.log(this.todo.value)
  }

  onRegister(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
      this.navCtrl.push("HomePage");
    })
    
  }

}
