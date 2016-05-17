import {Component, OnInit} from 'angular2/core';
import {Column} from './column.component'

import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Column],
    providers : [WallService],
    template : `
            <column *ngFor="#column of columns" [imageList]="column" [loadFunction]="startAnimation"></column>
    `
})

export class Wall implements OnInit{
    columns : string[][];

    constructor (private wallService:WallService) {

    }

    ngOnInit () {
        this.columns = this.wallService.getPhotos();
    }

    /** After column photos are done loaded, start animation */
    startAnimation (container) {
        console.log(container);
        var container = container;
        container.onmouseenter = (e) => {
            container.hover = true;
        }
        container.onmouseleave = (e) => {
            container.hover = false;
        }
        var speed = Math.random()*10 + 1;
        setInterval(()=>{
            if (!container.hover) {
                container.style.left = (Number(container.style.left.substring(0, container.style.left.length-2)) - speed).toString() + "px";
                let child = container.children[0];
                if (container.offsetLeft + child.offsetWidth <= 0) {
                    container.style.left = "0px";
                    container.appendChild(child);
                    child.style.left = "-4px";
                }
            }
        }, 60);
    }
}
