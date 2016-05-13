import {Component, OnInit} from 'angular2/core';
import {Column} from './column.component'

import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Column],
    providers : [WallService],
    template : `
            <column *ngFor="#column of columns" [column]="column"></column>
    `
})

export class Wall implements OnInit{
    columns : string[][];

    constructor (private wallService:WallService) {

    }

    ngOnInit () {
        this.columns = this.wallService.getPhotos();
    }
}
