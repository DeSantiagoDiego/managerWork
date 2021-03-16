import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string;
  clase: string;
  constructor(private router: Router) { }

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
}
