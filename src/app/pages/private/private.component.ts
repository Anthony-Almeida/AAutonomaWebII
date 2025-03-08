import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
constructor(private route: Router){}
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['login'])
  }

}
