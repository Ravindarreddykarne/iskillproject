import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentoneComponent } from './talentone.component';

describe('TalentoneComponent', () => {
  let component: TalentoneComponent;
  let fixture: ComponentFixture<TalentoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
