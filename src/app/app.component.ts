import { Component, Renderer2 } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';
import { AngularTechsLogosModule } from 'angular-techs-logos';
// import { AngularVlibras } from '../../projects/angular-vlibras/src/lib/angular-vlibras.component';
import { ModalinstallComponent } from './components/modal-install/modal-install.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularVlibras, ModalinstallComponent, AngularTechsLogosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  title = 'VLibras';
  codeString: string = 'npm install angular-vlibras';
  isModalActive: boolean = false;

  openModal(): void {
    this.isModalActive = true;
    this.renderer.addClass(document.body, 'modal-active');
  }

  closeModal(): void {
    this.isModalActive = false;
    this.renderer.removeClass(document.body, 'modal-active');
  }
}
