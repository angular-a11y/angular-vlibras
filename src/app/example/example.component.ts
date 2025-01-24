import { Component } from '@angular/core';
import { NucleusBox } from 'nucleus-angular';
import { AngularVlibras } from '../../../projects/angular-vlibras/src/public-api';

@Component({
    selector: 'example-vlibras',
    imports: [AngularVlibras, NucleusBox],
    templateUrl: './example.component.html',
    styleUrl: './example.component.scss'
})
export class ExampleVlibras {}
