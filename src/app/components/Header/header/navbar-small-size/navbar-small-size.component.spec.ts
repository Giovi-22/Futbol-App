import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSmallSizeComponent } from './navbar-small-size.component';

describe('NavbarSmallSizeComponent', () => {
  let component: NavbarSmallSizeComponent;
  let fixture: ComponentFixture<NavbarSmallSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavbarSmallSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSmallSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
