import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReskillComponent } from './reskill.component';

describe('ReskillComponent', () => {
  let component: ReskillComponent;
  let fixture: ComponentFixture<ReskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
