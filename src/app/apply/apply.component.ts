import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  template: `
 
      <div class="panel panel-primary">
          <div class="panel-heading">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h4 class="panel-title" id="contactLabel"><span class="glyphicon glyphicon-info-sign"></span> Any questions? Feel free to contact us.</h4>
          </div>
          <form action="#" method="post" accept-charset="utf-8">
          <div class="modal-body" style="padding: 5px;">
                <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="firstname" placeholder="Firstname" type="text" required autofocus />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="lastname" placeholder="Lastname" type="text" required />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12" style="padding-bottom: 10px;">
                          <input class="form-control" name="email" placeholder="E-mail" type="text" required />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12" style="padding-bottom: 10px;">
                          <input class="form-control" name="contact number" placeholder="contact number" type="text" required />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="firstname" placeholder="city" type="text" required autofocus />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="lastname" placeholder="state" type="text" required />
                      </div>

                  </div>
                   <label for="name">Graduation Details:</label>
      
                   <div class="row">
                    

                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="firstname" placeholder="college name" type="text" required autofocus />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="lastname" placeholder="percentage" type="text" required />
                      </div>
                  </div>
                  <div class="row">
                    

                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="firstname" placeholder="inter college name" type="text" required autofocus />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="lastname" placeholder="percentage" type="text" required />
                      </div>
                  </div>
                  <div class="row">
                    

                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="firstname" placeholder="School name" type="text" required autofocus />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" style="padding-bottom: 10px;">
                          <input class="form-control" name="lastname" placeholder="percentage" type="text" required />
                      </div>
                  </div>

              <div class="row">
      <label for="name">
          Resume Upload:</label>
      <input type="file" class="form-control" id="image" name="image"  required>
  </div>

                  <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                          <textarea style="resize:vertical;" class="form-control" placeholder="Message..." rows="6" name="comment" required></textarea>
                      </div>
                  </div>
              </div>  
              <div class="panel-footer" style="margin-bottom:-14px;">
                  <input type="submit" class="btn btn-success" value="Send"/>
                      <!--<span class="glyphicon glyphicon-ok"></span>-->
                  <input type="reset" class="btn btn-danger" value="Clear" />
                      <!--<span class="glyphicon glyphicon-remove"></span>-->
                  <button style="float: right;" type="button" class="btn btn-default btn-close" data-dismiss="modal">Close</button>
              </div>
        
  `,
  styles: []
})
export class ApplyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
