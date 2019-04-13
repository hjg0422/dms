import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtusauComponent } from './ttusau.component';

describe('TtusauComponent', () => {
  let component: TtusauComponent;
  let fixture: ComponentFixture<TtusauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtusauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtusauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
