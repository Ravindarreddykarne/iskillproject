import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-talentone',
  template: `
  
  <div class="container">
  <h1>{{ person.name }}</h1>
  <dl class="list">
    <dt>comment</dt>
    <dd>{{ person.comment }}</dd>
    <dt>salary</dt>
    <dd>{{ book.salary}}</dd>
  
    <dt>Update Date</dt>
    <dd>{{ book.updated_date | date:'short' }}</dd>
  </dl>
</div>
  `,
  styles: []
})
export class TalentoneComponent implements OnInit {
  public persons;
  constructor(private _personService:PersonsService, private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this._personService.Eachperson(id).subscribe(data =>{
      console.log(data);
      this.persons=data;
    })
  }

}
