import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  
  <header class="contaioner"> 
  <nav class="navbar navbar-right navbar-fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/home"><img src="{{image1}}" class="img1"/></a>
      <ul class="nav navbar-nav navbar-right">
       
                       <li>  <a class=""  [routerLink]="['/home']">HOME</a></li>
                       <li>  <a class=""  [routerLink]="['/program']">PROGRAM</a></li>
                       <li> <a class=""   [routerLink]="['/reskill']">RESKILL</a></li>
                       <li> <a class=""   [routerLink]="['/talent']">TALENT</a></li>
                        <li> <a class=""   [routerLink]="['/testmonial']">TESTMONIAL</a></li>
                   
                       <li> <a  class=""  [routerLink]="['/about']">ABOUT</a>  </li>
                             
                       </ul>
                       </div>
                       </nav> 
                     </header>    
  `,
  styles: [
    `
    .navbar {
      margin-bottom: 0;
      background-color:#e3e3e3;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 4px;
      border-radius: 0;
      border-bottom: 1px solid #cde4ed;
  }
  .navbar-brand {
      float: left;
      height: 50px;
      padding: 15px 15px;
      font-size: 18px;
      line-height: 20px;
      margin-top: 5px;
  }
  
  .navbar li a, .navbar .navbar-brand {
      color:rgb(191, 42, 42) !important;
  }
  .navbar-nav>li>a {
      padding-top: 21px;
      padding-bottom: 15px;
  }
  
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #f4511e !important;
      background-color: #fff !important;
  }
  
  li.dropdown:hover > .dropdown-menu {
      display: block;
  }
  .img1{
    margin-top:-11px;
  }
    `
  ]
})
export class NavbarComponent implements OnInit {
image1:string='./assets/logo.png'
  constructor() { }

  ngOnInit() {
  }

}
