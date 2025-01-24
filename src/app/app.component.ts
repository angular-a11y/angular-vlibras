import { Component } from '@angular/core';
import { NucleusAngularApp } from 'nucleus-angular';

import pkg from '../../package.json';
import pkgNPM from '../../projects/angular-vlibras/package.json';
import { ExampleVlibras } from './example/example.component';
import { ExampleComponent } from './app.example';
@Component({
    selector: 'app-root',
    imports: [NucleusAngularApp, ExampleVlibras],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public appVersion;
  public angularVersion;
  public configNucleus: {
    name: string;
    github: string;
    npm: string;
    appVersion: string;
    angularVersion: string;
    stepsInstall: Array<{ name: string; language: string; content: string }>;
  };

  constructor() {
    this.appVersion = pkgNPM.version;
    this.angularVersion = pkg.dependencies?.['@angular/core'].replace('^', '');
    this.configNucleus = {
      name: 'angular-vlibras',
      github: 'https://github.com/angular-a11y/angular-vlibras',
      npm: 'https://www.npmjs.com/package/angular-vlibras',
      appVersion: this.appVersion,
      angularVersion: this.angularVersion,
      stepsInstall: [
        {
          name: 'Install',
          language: 'bash',
          content: 'npm install angular-vlibras',
        },
        {
          name: 'Usage',
          language: 'tsx',
          content: ExampleComponent,
        },
      ],
    };
  }
}
