import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reskill',
  template: `
    <div>
     <img src="{{image1}}" class="img1"/>
    </div>
   
<div class="container-fluid">
<div class="container ">
<b class="">New Infy CEO chants 'reskill' mantra to staff  - Salil Parekh, CEO Infosys</b>


<br/>


<b class="">Re-skill, stay relevant is Wipro’s new HR mantra. - Saurabh Govil, HR, Wipro</b>
<br/>




<b class="">TCS takes digital route to re-skill - Rajanna, VP Global Head, TCS</b>



<br />
    

<div className="col-md-12 ">
<h2 className="reskillready">Are you ready to reskill ?</h2>
</div>
<div class="container">
    <ul>
        <li>Do you feel you have the required skills to thrive in your current and future Jobs.</li>
        <li>The jobs landscape is changing quite quickly. For example, few year ago, it was difficult to find an engineer who can do both JavaScript, Java, Database design etc. Today there is a huge demand for full stack developers.</li>
        <li>There is Ameerpet, Udemy, Udacity, Coursera etc.. Are you ready to get on to these courses?</li>
        <li>Are you ready to understand BigData, Angular/React, Bootstrap, Node, Cloud, Scrum, DevOps, Artificial Intelligence and Machine Learning?</li>
        <li>We at iSkyll Academy is challenging you to the next level. The idea is to reskill you(We call ot as ReSkinning), so that you are fit and ready to roar again.</li>
        <li>After you are Reskinned, you will be a full stack developer with the state of the art hands on understanding of technologies. Not only this, the course opens up lethora of possibilities which you have not thoughut of before.</li>
        <li>This is for people who are hungry to learn and ambitious and wants to get to their dreams.</li>

    </ul>
</div>
<div className="col-md-8 col-md-offset-2 ">
 <h4>What is part of reskilling process..</h4>
 </div>
  <div class="container">
      <ul>
          <li>Get counselling and evaulaute yourself on what you want to do next? Call in for a Counselling Session;</li>
          <li>Once you have the information, apply here for the program</li>
    </ul>
</div>
<div className="col-md-8 col-md-offset-2 ">
<span><b>&#10003;</b></span>Apply Button; Check Frequently Asked Questions<span>&#63;</span>
</div>
<div class="container">
<img src="{{image2}}" class="img2"/>
</div>
<div className="col-md-12 ">
<h2 className="reskillready">5 reasons Why you need to reskill? (ReSkin)</h2>
</div>
 <div className="col-md-8 col-md-offset-2 ">
     <ol>
<li>
 You are stuck in the current and lost crucial time </li>
<li>
 You are out of touch with Technology and wants to quickly getback to technology</li>
<li >
 You are a dreamer, ambititious and want to explore more.</li>
<li >
 You want to build products and become an enterprenur - this is the tight choice</li>
<li>
You just want to get more salary in with newly acquired skil sets</li>
</ol>


</div>
 

       </div>
    
  `,
  styles: [
    `
    .img1{
      width: 100%;
      height: 340px
    }
    .h2,h2{
      color:#27538a;
    }
    .img2{
      height: 243px;
      width: 65%;
    }
    `
  ]
})
export class ReskillComponent implements OnInit {
image1:string='./assets/producttwo.jpg';
image2:string='./assets/reskillfive.jpg';
  constructor() { }

  ngOnInit() {
  }

}
