import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularVlibras } from './angular-vlibras.component';
import { mapPosition } from './utils';

describe('AngularVlibras', () => {
  let component: AngularVlibras;
  let fixture: ComponentFixture<AngularVlibras>;
  let scriptElement: HTMLScriptElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVlibras]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularVlibras);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Mock the script element
    scriptElement = document.createElement('script');
    spyOn(document.body, 'appendChild').and.callFake((script: any): any => {
      scriptElement = script as HTMLScriptElement;
    });

    // Mock the VLibras global object
    (window as any).VLibras = {
      Widget: jasmine.createSpy('Widget')
    };
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the script and create widget on load', () => {
    spyOn(component, 'createWidget').and.callThrough();
    component.ngOnInit();

    expect(document.body.appendChild).toHaveBeenCalledWith(jasmine.any(HTMLScriptElement));
    (scriptElement as HTMLScriptElement).dispatchEvent(new Event('load'));
    expect(component.createWidget).toHaveBeenCalled();
  });

  it('should create the VLibras widget on script load', () => {
    const vlibrasMock = (window as any).VLibras.Widget as jasmine.Spy;

    component.init();
    (scriptElement as HTMLScriptElement).dispatchEvent(new Event('load'));

    expect(vlibrasMock).toHaveBeenCalledWith({
      position: component.position ? mapPosition[component.position] : 'R',
      rootPath: component.urlWidget,
      avatar: component.avatar,
      opacity: component.opacity
    });
  });

  it('should handle default avatar and opacity values correctly', () => {
    const vlibrasMock = (window as any).VLibras.Widget as jasmine.Spy;

    component.init();
    (scriptElement as HTMLScriptElement).dispatchEvent(new Event('load'));

    expect(vlibrasMock).toHaveBeenCalledWith({
      position: 'R',
      rootPath: component.urlWidget,
      avatar: 'guga',
      opacity: 1
    });
  });
});
