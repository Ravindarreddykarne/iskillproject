import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <div class="reddy">
    <router-outlet></router-outlet>
 </div>
 
  `,
  styles: [
    `
   .reddy{
      margin-top:58px;
      color:black;
    }
   
    `
  ]
})
export class AppComponent {
  title = 'app';
}
