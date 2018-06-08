import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { TalentComponent } from './talent/talent.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { ReskillComponent } from './reskill/reskill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { HowComponent } from './how/how.component';
import { ApplyComponent } from './apply/apply.component';
import { FAQComponent } from './faq/faq.component';
import { TalentoneComponent } from './talentone/talentone.component';
import {PersonsService } from './persons.service';
const appRoutes:Routes = ([  
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'program',  
 component:ProgramComponent,
//  children: [
//   // {path: '**', redirectTo: 'how'},
// {path:'how',component:HowComponent},
// {path:'apply',component:ApplyComponent},
// {path:'faq',component:FAQComponent}
// ]
},
{path:'how',component:HowComponent},
 {path:'apply',component:ApplyComponent},
{path:'faq',component:FAQComponent},
{path:'talent',    component:TalentComponent},
{path:'testmonial',component:TestmonialComponent},
{path:'reskill', component:ReskillComponent},
{path:'navbar',   component:NavbarComponent},
{path:'footer',component:FooterComponent},
{path:'talent/:id',component:TalentoneComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' }, 
 

 

])
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProgramComponent,
    TalentComponent,
    TestmonialComponent,
    ReskillComponent,
    NavbarComponent,
    FooterComponent,
    HowComponent,
    ApplyComponent,
    FAQComponent,
    TalentoneComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
