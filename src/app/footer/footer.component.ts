import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer-bottom">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 ">
        <div class="copyright-text">
          <p>CopyRight © 2017 Digital All Rights Reserved</p>
        </div>
      </div> 
      <div class="col-sm-6  ">
          <div class="copyright-text pull-right">
          <p> <a href="#">Home</a> | <a href="#">Privacy</a> |<a href="#">Terms & Conditions</a> | <a href="#">Refund Policy</a> </p>
        </div>					
                    
      </div> 
    </div>
  </div>
</div>

  `,
  styles: [
    `
    .footer-bottom {
     
      left: 0;
      bottom: 0;
      width: 100%;
      padding-bottom: 25px;
      border-top: 1px solid #2f2f33 ;
      background: #1e1d22  ;

  }
  .copyright-text p {
      color:#ffffff;
      margin-top: 18px;
      margin-bottom: 0;
      font-size:15px;
    
  }
  
  .copyright-text a {
      color:#ffffff;
      margin: 0px 10px 0px 10px;
      
  }
  .copyright-text a:hover {
      color: #aece61  ;
      
      
  }
  /* Social Icons */
  
  
   .img10{
      vertical-align: middle;
      width: 69%;
      margin-top: -71px;
   }

    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
