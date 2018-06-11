import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <img src ="{{img3}}" class="image"/>
  <div class="container-fluid">
  
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Build Your Product</h1>
        </div>
        <div class="panel-body">
          <p>Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators.</p>
        </div>
        
      </div> 
    </div> 
    <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Build Your Team</h1>
        </div>
        <div class="panel-body">
          <p>Experts in financial modeling &amp; valuation, startup funding, interim CFO work, and market sizing.</p>
       
      </div> 
    </div> 
</div>
   <div class="col-sm-4">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Hire Your Team</h1>
        </div>
        <div class="panel-body">
         <p>Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.</p>
        </div>
      
       
    </div> 
  </div>
</div>

</div>
  <img src="{{img2}}" class="image2"/>
  <hr>
  <div>
  <ul class="price">
  <h3>Build Your Product</h3>
  </ul>
  <div class="container">
  
    <div class="container-fluid1">
      <div class="wrapper row">
        <div class="preview col-md-6">
          <div class="preview-pic tab-content">
      <h2><b>ISKYLL TAKES THE OWNERSHIP OF BUILDING THE PRODUCT</b></h2>
          </div>
        </div>
        <div class="details col-md-6">
        <div class="container">
             <blockquote class="quote-box">
              <p class="quote-text"> Overview Of Programming With Java</p>
              <p class="quote-text"> More details on Java</p>
              <p class="quote-text">   Primtive Dataypes</p>
               <p class="quote-text"> Array - Overview</p>
              <p class="quote-text">Object Oriented Concepts - Revisited</p>                                     
              </blockquote>
               </div>                                     
      </div>
      </div>
    </div>
  </div>

  <div>
  <ul class="price">
  <h3>Build Your Team</h3>
  </ul>
  <div class="container">
  
        <div class="container-fluid1">
          <div class="wrapper row">
            <div class="preview col-md-6">
           <div class="preview-pic tab-content">
          <h2><b> ISKYLL TAKES THE OWNERSHIP OF BUILDING THE TEAM</b></h2>
          </div>
           </div>
        <div class="details col-md-6">
       
        <div class="container">
        <blockquote class="quote-box">
         <p class="quote-text"> Overview Of Programming With Java</p>
         <p class="quote-text"> More details on Java</p>
         <p class="quote-text">   Primtive Dataypes</p>
          <p class="quote-text"> Array - Overview</p>
         <p class="quote-text">Object Oriented Concepts - Revisited</p>                                     
         </blockquote>
          </div>                                    
      </div>
      </div>
    </div>
  </div>

  <div>
  <ul class="price">
  <h3>Hire Your Team</h3>
  </ul>
  <div class="container">
  
    <div class="container-fluid1">
      <div class="wrapper row">
        <div class="preview col-md-6">
          
          <div class="preview-pic tab-content">
            
           <h2><b> ISKILL GET THE BEST DEVOLOPER TO WORK</b></h2>
          </div>
          
          
        </div>
        <div class="details col-md-6">
             <div class="container">
             <blockquote class="quote-box">
              <p class="quote-text"> Overview Of Programming With Java</p>
              <p class="quote-text"> More details on Java</p>
              <p class="quote-text">   Primtive Dataypes</p>
               <p class="quote-text"> Array - Overview</p>
              <p class="quote-text">Object Oriented Concepts - Revisited</p>                                     
              </blockquote>
               </div>
         </div>
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [
    `
    b{
      color: cornflowerblue;
    }
    h2{
      font-size: 16px;
    }
    .col-sm-4 {
      width: 33.33333333%;
      margin-top: 38px;
    }
    .image {
      width: 100%;
      height: 306px;
  }
  .image2{
    margin-left:66px;
  }
  h3{
    color:#3863a0;
    margin-left:40px;
    margin-bottom: 66px;
  }
  .row{
    padding-left: 218px;
    padding-right: 269px;
  }
  blockquote{
    border-left:none
}

.quote-badge{
    background-color: rgba(0, 0, 0, 0.2);   
}

.quote-box{
    
    overflow: hidden;
    margin-top: -50px;
    padding-top: -100px;
    border-radius: 17px;
    background-color: #4ADFCC;
    margin-top: 25px;
    color:white;
    width: 384px;
    box-shadow: 2px 2px 2px 2px #E0E0E0;
    
}

.quotation-mark{
    
    margin-top: -10px;
    font-weight: bold;
    font-size:100px;
    color:white;
    font-family: "Times New Roman", Georgia, Serif;
    
}

.quote-text{
    
  font-size: 18px;
  margin-top: 3px;
}
    `
  ]
})
export class HomeComponent implements OnInit {
img1:string='./assets/ravinder2.jpg';
img2:string='../assets/camparisionimage.png'
img3:string='../assets/productone.jpg'
image
  constructor() { }

  ngOnInit() {
  }

}
