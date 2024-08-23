import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularVlibras } from '../../projects/angular-vlibras/src/lib/angular-vlibras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularVlibras],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-vlibras';
}
