import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutsauComponent } from './tutsau.component';

describe('TutsauComponent', () => {
  let component: TutsauComponent;
  let fixture: ComponentFixture<TutsauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutsauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutsauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
