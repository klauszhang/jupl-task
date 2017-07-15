import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
@Component({
    selector: 'jp-input',
    templateUrl: './input.widget.html',
    styleUrls: ['./input.widget.css']
})
export class InputWidget {
    model: string;
    @Input() title: string;
    // databinding for value change
    @Output() change = new EventEmitter<string>();
    input(event) {
        this.change.emit(event.target.value);
    }

}