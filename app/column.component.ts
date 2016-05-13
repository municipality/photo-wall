import {Component, Input} from 'angular2/core';

@Component ({
    selector : 'column',
    template : `
            <div *ngFor="#item of column" class="column-image">
                <img src={{item.src}}>
            </div>
    `
})

export class Column {
    @Input() column : string[];
    constructor () {

    }
}
