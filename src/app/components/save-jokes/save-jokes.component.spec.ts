import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJokesComponent } from './save-jokes.component';

describe('SaveJokesComponent', () => {
  let component: SaveJokesComponent;
  let fixture: ComponentFixture<SaveJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
