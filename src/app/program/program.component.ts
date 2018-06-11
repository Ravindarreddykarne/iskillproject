import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  template: `
    <div>
    <img src="{{img2}}" class="image"/>
    </div>
    <div class="container">
    <p class="ctn1">A program catered to meet the demands on a new age software engineer.
     The program gives an experience certificate of one year after the successful completion of tests, assignments and projects in the program. The incubent will be taken into a world of technologies, with hands on do it yourself approach, the candidate will be able to survive the hardships of any IT Job there after.</p>
    </div>
    <hr>
    <div class="container">
  
       <button type="button" class="btn btn-success" [routerLink]="['/how']">how we get</button>
      
       <button type="button" class="btn btn-success" [routerLink]="['/apply']" >APPLY</button>
       <button type="button" class="btn btn-success" [routerLink]="['/faq']">FAQ</button>
    </div>
    <router-outlet></router-outlet>
    <div class="container">
    <h1>Advantages of the program  </h1>
    <ul>
     <li>6 months skilling - carries an experience certificate</li>
     <li>Survival skills taught - Learn any new technology with ease</li>
     <li>No lectures, no classrooms; Do it your self</li>
     <li>Assignments and projects to make the candidate seasoned professional</li>
     <li>6 months experience is equal to 3 years experience in the industry*</li>
     
</ul> 
  
    </div>
    <hr>
    <div>
    <ul class="price">
    <h3>Integrated Program In Software Engineering</h3>
    </ul>
    <div class="container">
    
      <div class="container-fluid1">
        <div class="wrapper row">
          <div class="preview col-md-6">
            
            <div class="preview-pic tab-content">
               <h2 class="product-title">Module 1</h2>
             <p class="product-description"> Java</p>
            </div>
            
            
          </div>
          <div class="details col-md-6">
            <h2 class="product-title">JAVA Language</h2>
            
            <p class="product-description"> Overview Of Programming With Java</p>
             <p class="product-description"> More details on Java</p>
          <p class="product-description">   Primtive Dataypes</p>
                   <p class="product-description"> Array - Overview</p>
                <p class="product-description">Object Oriented Concepts - Revisited</p>                                     
        </div>
        </div>
      </div>
    </div>
    <div class="container">
    
      <div class="container-fluid1">
        <div class="wrapper row">
          <div class="preview col-md-6">
            
            <div class="preview-pic tab-content">
               <h2 class="product-title">Module 2</h2>
             <p class="product-description"> WEB DEVELOPER</p>
            </div>
            
            
          </div>
          <div class="details col-md-6">
            <h2 class="product-title">WEB DEVELOPER</h2>
            
               <p class="product-description"> HTML and CSS</p>
               <p class="product-description"> JavaScript</p>
               <p class="product-description"> Bootstrap</p>
               <p class="product-description"> jQuery</p>
               <p class="product-description">SQL&PHP</p>                                     
        </div>
        </div>
      </div>
    </div>
    <div class="container">
    
      <div class="container-fluid1">
        <div class="wrapper row">
          <div class="preview col-md-6">
            
            <div class="preview-pic tab-content">
               <h2 class="product-title">Module 3</h2>
             <p class="product-description"> HTML5</p>
            </div>
            
            
          </div>
          <div class="details col-md-6">
            <h2 class="product-title">HTML5</h2>
           
            
            <p> HTML Forms</p>
            <p>HTML Graphics</p>
            <p>HTML Media</p>
            <p>HTML APIs</p>
            <p>HTML Examples*</p>
          
                 
                                     
        </div>
        </div>
      </div>
    </div>

    <div class="container">
    
      <div class="container-fluid1">
        <div class="wrapper row">
          <div class="preview col-md-6">
           <div class="preview-pic tab-content">
             <h2 class="product-title">Module 4</h2>
               <p class="product-description">JavaScript</p>
            </div>
            
            
          </div>
          <div class="details col-md-6">
            <h2 class="product-title">JavaScript</h2>
             <p class="product-description"> JavaScript Tutorial</p>
             <p class="product-description">JS Forms</p>
             <p class="product-description">JS Forms&Functions</p>
             <p class="product-description"> JS HTML DOM</p>
             <p class="product-description">JS AJAX&JS JSON</p> 
                                                     
        </div>
        </div>
      </div>
    </div>

    <div class="container">
    
      <div class="container-fluid1">
        <div class="wrapper row">
          <div class="preview col-md-6">
           <div class="preview-pic tab-content">
           <h2 class="product-title">Module 4</h2>
              <p class="product-description">Bootstrap </p>
            </div>
            
            
          </div>
          <div class="details col-md-6">
            <h2 class="product-title">Bootstrap </h2>
            
            <p class="product-description"> Bootstrap Tutorial</p>
             <p class="product-description">Bootstrap Grids&Bootstrap Themes</p>
             <p class="product-description">Bootstrap JS Ref</p>
             <p class="product-description"> Bootstrap References</p>
            <p class="product-description">Bootstrap CSS Ref</p>  

                                                    
        </div>
        </div>
      </div>
    </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
      `
      .image {
        width: 100%;
        height: 306px;
    }
    .ctn1{
      font-size: 104%;
      margin-left: 74px;
      margin-right: 95px;
      margin-top: 12px;
    }

    .btn-success{
      color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    margin-right: 136px;
    padding-right: 63px;
    text-align: center;
    padding-left: 45px;
    margin-left: 69px;
}
h1{
  color:#3863a0;
  font-size:150%;
}
h2{
  color:#3863a0;
 
}

price{
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  height: 100%;
  background-color: white;
}
h3{
  color:#3863a0;
text-align:center;
}
.row{
  padding-left: 218px;
  padding-right: 269px;
}
      `
  ]
})
export class ProgramComponent implements OnInit {
  img2:string='../assets/programbanner.jpg'
  constructor() { }

  ngOnInit() {
  }

}
