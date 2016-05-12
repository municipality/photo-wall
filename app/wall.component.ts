import {Component} from 'angular2/core';
import {Column} from './column.component'

import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Column],
    providers : [WallService],
    template : `
        <div id="wall">
            <column></column>
            <column></column>
        <div>
    `
})

export class Wall {

    constructor (private wallService:WallService) {

    }
}
