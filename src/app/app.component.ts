import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet],
  standalone: true
})
export class AppComponent  {
  title = 'eCommerceGTFronted';
 
  constructor(private router: Router) { }
}
