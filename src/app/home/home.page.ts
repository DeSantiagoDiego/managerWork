import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private router: Router) { }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /*openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  */
  irLogin() {
    this.menu.close();
    //this.menu.enable(false, 'first');
    this.router.navigate(['/login'])
  }

  irProfile(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
    this.router.navigate(['/profile'])
  }
  irProfile2(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
    this.router.navigate(['/profile'])
  }

  newProject(){
    this.router.navigate(['/new-project'])
  }
}
