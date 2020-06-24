import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { HeaderComponent } from '../app/components/header/header.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '@Yue Song'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('starWars');
  });

  it('should render title in header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const headerElement = fixture.debugElement.query(By.css('app-header'));
    expect(headerElement.nativeElement.querySelector('h3').textContent).toContain('@Yue Song');
  });
});
