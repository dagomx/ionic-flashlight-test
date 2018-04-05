import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private estatus: number = 0;

  constructor(
    public navCtrl: NavController,
    private flashlight: Flashlight) {

  }

  buttonAction(){
    if(this.estatus == 0){
      this.estatus = 1;
      this.flashlight.switchOn().then(turnedOn => console.log('Flashlight turned on: ', turnedOn));
    }else{
      this.estatus = 0;
      this.flashlight.switchOff().then(turnedOff => console.log('Flashlight turned off: ', turnedOff));
    }
    console.log(this.estatus === 0 ? 'Apagado': 'Encendido');
  }

}
