import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
  }

  openFirst() {
    //this.menu.open();
    this.menu.enable(true, 'second');
    this.menu.open('second');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  irLogin() {
    //this.menu.close();
    this.menu.enable(false, 'second');
    this.menu.close('second');
    this.router.navigate(['/login'])
  }
  irHome() {
    this.menu.enable(false, 'second');
    this.menu.close('second');
    this.router.navigate(['/home'])
  }
}

