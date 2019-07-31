import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakuBusComponent } from './baku-bus.component';

describe('BakuBusComponent', () => {
  let component: BakuBusComponent;
  let fixture: ComponentFixture<BakuBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakuBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakuBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
