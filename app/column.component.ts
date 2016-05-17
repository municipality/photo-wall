import {Component, Input, OnInit} from 'angular2/core';

@Component ({
    selector : 'column',
    template : `
        <div #container class="column-container">
            <div *ngFor="#item of imageList" class="column-image">
                <img #image (load)="imageLoaded(image, container)" src={{item.src}}>
            </div>
        </div>
    `
})

export class Column implements OnInit {
    /** String of image srcs */
    @Input() imageList : string[];
    /** Load function to be fired after column is loaded */
    @Input() loadFunction : Function;

    loaded : number;
    images : HTMLImageElement[];


    constructor () {
        this.loaded = 0;
        this.images = [];
    }

    /**
    imageLoaded
    keeps track of how many images are loaded
    stores loaded images in array
    */
    imageLoaded (image, container) {
        this.images.push(image);
        this.loaded++;
        if (this.loaded == this.imageList.length) {
            // load function handles the animation from wall.component
            this.loadFunction(container);
        }
    }

    ngOnInit () {

    }
}
