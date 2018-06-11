import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';
@Component({
  selector: 'app-talent',
  template: `
  <div class="container">
  <ng-container *ngFor="let person of persons">
  <div class="card">
    <div class="container-fliud">
      <div class="wrapper row">
        <div class="preview col-md-6">
          
          <div class="preview-pic tab-content">
            <div class="tab-pane active" id="pic-1"><img src="{{person.imagepath}}" /></div>
           
          </div>
          
          
        </div>
        <div class="details col-md-6">
          <h3 class="product-title">{{person.name}}</h3>
          
          <p class="product-description">Indian business tycoon, investor, and philanthropist,</p>
          <h4 class="price">current salary: <span>{{person.salary}}</span></h4>
          <p class="vote"><strong>91%</strong> of visits enjoyed this! <strong>(87 votes)</strong></p>
          <div class="rating">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <span class="review-no">41 reviews</span>
          </div>
          
             <div class="action">
            <button class="add-to-cart btn btn-default" type="button">Hire {{person.name}}</button>
            <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
            <a [routerLink] ="['/talent' ,person._id]" (click)="talent(book)" class="add-to-cart btn btn-default">Know more</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  </ng-container>
</div>

<app-footer></app-footer>




    
  `,
  styles: [
   `
    div.row{
      margin-right: -210px;
      margin-left: 135px;
    }




	img#img9{
		width: 130px
	}
	img {
  max-width: 100%; }

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 47%;
    height: 227px;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
  	height: 293px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
	margin-left: -195px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }



@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }
    `
  ]
})
export class TalentComponent implements OnInit {
 public persons;
  constructor(private _personService:PersonsService) { }

  ngOnInit() {
  this._personService.persons().subscribe(data =>{
    console.log(data);
    this.persons=data;
  })

  }

}
