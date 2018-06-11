import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonsService } from 'src/app/persons.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-testmonial',
  template: `
  <div>
  <img src="{{image1}}" class="img1"/>
 </div>

  <div class="col-sm-9" style="margin-top:60px">
  <ng-container *ngFor="let person of persons">
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="ravi">
               <div class="row">
                   <div class="col-sm-6 col-md-4">
                        <img src="{{person.imagepath}}"  class="img-rounded"/>
                    </div>
            <div class="col-sm-6 col-md-8">
            <h4><b>{{person.name}}</b></h4>
    <small><cite title="San Francisco, USA"> Hachette India <i class="glyphicon glyphicon-map-marker"></i></cite></small>
          <p>{{person.comment}}</p>
         </div>
      </div>
  </div>

</div>
</div>
</div>
  
<hr>  
</ng-container>
 
</div>             
<br>
<br>


                  



            

                
                


    
  `,
  styles: [
    `
    .img1{
      width: 100%;
      height: 340px
    }
    img.img-rounded{
      width: 124px;
    }
    div.row{
      margin-right: -210px;
      margin-left: 135px;
    }
    hr{
      width: 135%;
    }
    `
  ]
})
export class TestmonialComponent implements OnInit {

public persons;

  image1:string='./assets/testimonials.jpg';
  
  constructor(private _personsService:PersonsService) {}
 

     
  
 
  
  ngOnInit() {
this._personsService.persons().subscribe(data =>{
  console.log(data);
  this.persons=data;
})


   
  
    }
  
  }
