import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularVlibras } from './angular-vlibras.component';

describe('AngularVlibras', () => {
  let component: AngularVlibras;
  let fixture: ComponentFixture<AngularVlibras>;
  let scriptElement: HTMLScriptElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularVlibras ]
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
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the script and create widget on load', () => {
    spyOn(component, 'createWidget');
    component.ngOnInit();

    expect(document.body.appendChild).toHaveBeenCalledWith(jasmine.any(HTMLScriptElement));
    (scriptElement as HTMLScriptElement).dispatchEvent(new Event('load'));
    expect(component.createWidget).toHaveBeenCalled();
  });

  it('should create the VLibras widget on script load', () => {
    const vlibrasMock = jasmine.createSpy('VLibras');
    (window as any).VLibras = { Widget: vlibrasMock };

    component.init();
    (scriptElement as HTMLScriptElement).dispatchEvent(new Event('load'));

    expect(vlibrasMock).toHaveBeenCalledWith(component.urlWidget);
  });
});
