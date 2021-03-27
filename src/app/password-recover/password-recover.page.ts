import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {

  constructor(
    public authService: AuthenticationService,private router: Router
  ) { }

  ngOnInit() {
  }

  sendPassword(email){
    this.authService.PasswordRecover(email.value)
    .then((res) => {
      // Do something here
      this.router.navigate(['/login']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

}
