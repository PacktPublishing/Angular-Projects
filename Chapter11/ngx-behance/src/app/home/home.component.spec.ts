import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Subject, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.posts$ = of([{id: 1, name: 'Title 1', covers: {115: 'image 1.jpg'}}, {id: 1, name: 'Title 2', covers: {115: 'image 2.jpg'}}]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('show have 2 post cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toEqual(2);
  });

  it ('should have the title in the card', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards[0].query(By.css('.card-text')).nativeElement.textContent).toEqual('Title 1');
  });
});
