import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelProject(){
    this.router.navigate(['/home']);
  }
}
