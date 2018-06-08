import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

  <div>
    <div class=" text-center">
        <img src="{{image1}}" alt="" class="img1">
        <div class="caption">
        <img src="{{image2}}" class="img2">
          
        </div>
    </div>
</div>
<div class="container-fluid bg-grey">
  <h2 class="text-center">CONTACT</h2>
  <div class="row">
    <div class="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Hyderabad,Telangana</p>
      <p><span class="glyphicon glyphicon-phone"></span> +9876543210</p>
      <p><span class="glyphicon glyphicon-envelope"></span>Ravindar@reddy.com</p>
    </div>
    <div class="col-sm-7">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
 
  `,
  styles: [

 `
 .col-sm-5{
  margin-top: 31px;
  width: 37.666667%;
 }
 .row {
  margin-top: 32px;
}
  .caption {
      position: absolute;
    margin-top:45px;
      left: 0;
      width: 100%;
  }
    .img1{
      width: 100%;
      height: 340px
    }
    .img2{
      margin-top: -572px;
      margin-left: -379px;
    }
    `
  ]
})
export class AboutComponent implements OnInit {
  image1:string='./assets/reskill.jpg';
  image2:string="./assets/iskyll2.gif"
  constructor() { }

  ngOnInit() {
  }

}
