import { Component, Input } from '@angular/core';
import { fade } from '../animations/fade-animation';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [fade]
})
export class MainComponent {
    @Input() selectedCar: string;
}
