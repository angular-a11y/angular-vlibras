import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angular-vlibras');
  });

  it('should render the <angular-VLibras> component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const vlibrasElement = compiled.querySelector('angular-VLibras');
    expect(vlibrasElement).toBeTruthy();
  });

  it('should render the Angular logo SVG', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const svgElement = compiled.querySelector('svg.angular-logo');
    expect(svgElement).toBeTruthy();
  });

  it('should have the main and content divs', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mainDiv = compiled.querySelector('main.main');
    const contentDiv = compiled.querySelector('div.content');
    expect(mainDiv).toBeTruthy();
    expect(contentDiv).toBeTruthy();
  });
});
