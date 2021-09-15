import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameprocessComponent } from './gameprocess.component';

describe('GameprocessComponent', () => {
  let component: GameprocessComponent;
  let fixture: ComponentFixture<GameprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
