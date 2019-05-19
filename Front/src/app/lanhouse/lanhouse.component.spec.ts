import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanhouseComponent } from './lanhouse.component';

describe('LanhouseComponent', () => {
  let component: LanhouseComponent;
  let fixture: ComponentFixture<LanhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
