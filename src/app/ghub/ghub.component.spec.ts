import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhubComponent } from './ghub.component';

describe('GhubComponent', () => {
  let component: GhubComponent;
  let fixture: ComponentFixture<GhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
