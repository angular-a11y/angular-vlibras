import { Component } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';
import { AngularTechsLogosModule } from 'angular-techs-logos';
// import { AngularVlibras } from '../../projects/angular-vlibras/src/lib/angular-vlibras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularVlibras, AngularTechsLogosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vlibras';
}
