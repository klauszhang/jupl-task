import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
@Component({
    selector: 'jp-input',
    templateUrl: './input.widget.html',
    styleUrls: ['./input.widget.css']
})
export class InputWidget {
    model: string;
    @Input() title: string;
    @Input() name: string;
    @Input() type: string;
    @Input() initialValue = "";
    // databinding for value change
    @Output() output = new EventEmitter<string>();
    input(event) {
        this.output.emit(event.target.value);
    }

}