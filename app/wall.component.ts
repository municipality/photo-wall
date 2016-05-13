import {Component, OnInit} from 'angular2/core';
import {Column} from './column.component'

import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Column],
    providers : [WallService],
    template : `
            <column *ngFor="#column of columns" [imageList]="column" [loadFunction]="columnLoaded"></column>
    `
})

export class Wall implements OnInit{
    columns : string[][];

    constructor (private wallService:WallService) {

    }

    ngOnInit () {
        this.columns = this.wallService.getPhotos();
    }

    columnLoaded (container) {
        console.log(container);
        var container = container;
        setInterval(()=>{
            //container.style.left = (Number(container.style.left.substring(0, container.style.left.length-2)) + 3).toString() + "px";
            //console.log(container.offsetLeft);
        }, 17);
    }
}
