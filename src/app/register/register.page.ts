import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string;
  clase: string;
  correo: string;
  confirmarContrasena: string;
  constructor(
    public authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  toIngresar() {
    this.router.navigate(['/login'])
  }
  cambiaNombre(valor){
    console.log(valor)
    console.log(valor.length)
    if(valor.length==0){
      document.getElementById("Nickname").innerText= "Nickname";
    }
    else{
      document.getElementById("Nickname").innerText= valor;
    }
    
  }
  cambiaClase(valor){
    console.log(valor)
    console.log(valor.length)
    if(valor.length==0){
      document.getElementById("Clase").innerText= "Clase";
    }
    else{
      document.getElementById("Clase").innerText= valor;
    }
    
  }


signUp(email, password){
  if(password.value!= this.confirmarContrasena){
    window.alert('Las contraseñas no coinciden')
  }else{
  this.authService.RegisterUser(email.value, password.value)
  .then((res) => {
    // Do something here
    this.authService.SendVerificationMail()
    this.router.navigate(['verify-email']);
  }).catch((error) => {
    window.alert(error.message)
  })
}
}
}
