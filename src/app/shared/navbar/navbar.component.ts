import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'as-navbar',
    templateUrl: 'navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
