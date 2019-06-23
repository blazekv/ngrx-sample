import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    @Input() value = 0;

    @Output() increment: EventEmitter<void> = new EventEmitter();
    @Output() decrement: EventEmitter<void> = new EventEmitter();
    @Output() reset: EventEmitter<void> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public generateIncrement() {
        this.increment.emit();
    }

    public generateDecrement() {
        this.decrement.emit();
    }

    public generateReset() {
        this.reset.emit();
    }

}
