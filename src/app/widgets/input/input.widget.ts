import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormGroupDirective, NgForm, FormControl } from "@angular/forms";

@Component({
    selector: 'jp-input',
    templateUrl: './input.widget.html',
    styleUrls: ['./input.widget.css']
})
export class InputWidget {
    model: any;
    @Input() title: string;
    @Input() name: string;
    @Input() type: string;
    @Input() initialValue = "";
    // databinding for value change
    @Output() output = new EventEmitter<string>();
    input(event) {
        this.output.emit(event.target.value);
    }

    ngOnInit() {
        this.model = this.initialValue;
        console.log(this.title);
        console.log(this.name);
        console.log(this.type);
        console.log(this.initialValue);
    }
}