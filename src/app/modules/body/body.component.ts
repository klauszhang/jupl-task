import { Component } from '@angular/core';
@Component({
    selector: 'jp-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    value: string;

    onChange(value: string) {
        if (typeof (value) === "string") {
            console.log(value)
            this.value = value;
        }
    }
}