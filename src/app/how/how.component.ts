import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how',
  template: `
  <div class="container">
	<div class="row">
        <div class="col-md-2">
		    <button class="btn btn-default orange-circle-button" href="">Aptitude<br>test<br><span class="orange-circle-greater-than"></span></button>
	
        </div> 
        <div class="#triangle-right"></div>
<div class="col-md-2">
		    <button class="btn btn-default orange-circle-button" href="">group<br>discussion<br><span class="orange-circle-greater-than"></span></button>
	
        </div> 
         <div class="triangle-right"></div>
<div class="col-md-2">
		    <button class="btn btn-default orange-circle-button" href="">just a<br>minute<br><span class="orange-circle-greater-than"></span></button>
	
        </div> 
        <div class="triangle-right"></div>
<div class="col-md-2">
		    <button class="btn btn-default orange-circle-button" href="">face to face<br>interview<br><span class="orange-circle-greater-than"></span></button>
	
        </div> 
        <div class="triangle-right"></div>
<div class="col-md-2">
		    <button class="btn btn-default orange-circle-button" href="">HR<br>interview<br><span class="orange-circle-greater-than"></span></button>
	
        </div> 
	</div>
</div>
  `,
  styles: [
    `
    .row{
      margin-right: -229px;
    margin-left: 25px;
    margin-top: 146px;
    }

.orange-circle-button {
	box-shadow: 2px 4px 0 2px rgba(0,0,0,0.1);
	border: 1.5em solid #E84D0E;
	font-size: 1em;
	line-height: 1.1em;
	color: #ffffff;
	background-color: #e84d0e;
	margin: auto;
	border-radius: 50%;
  height: 10em;
  width: 10em;
	position: relative;
}
.orange-circle-button:hover {
	color:#ffffff;
    background-color: #e84d0e;
	text-decoration: none;
	border-color: #ff7536;
	
}
.orange-circle-button:visited {
	color:#ffffff;
    background-color: #e84d0e;
	text-decoration: none;
	
}
.orange-circle-link-greater-than {
    font-size: 1em;
}
div.#triangle-right {
	width: 0;
	height: 0;
	border-top: 50px solid;
	border-left: 100px solid red;
	border-bottom: 50px solid ;
}
    `
  ]
})
export class HowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
